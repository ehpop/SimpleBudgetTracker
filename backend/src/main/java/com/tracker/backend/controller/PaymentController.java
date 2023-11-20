package com.tracker.backend.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.tracker.backend.dto.PaymentDTO;
import com.tracker.backend.dto.Views;
import com.tracker.backend.service.PaymentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/payments")
@Slf4j
public class PaymentController {

  private final PaymentService paymentService;

  @Operation(description = "Returns all payments", tags = {"Payments", "Get"})
  @ApiResponses(
      value = {
          @ApiResponse(responseCode = "200", description = "Successfully retrieved payments", content = @Content(array = @ArraySchema(schema = @Schema(implementation = PaymentDTO.class))))
      })
  @GetMapping
  @JsonView(Views.Get.class)
  public ResponseEntity<List<PaymentDTO>> findAll() {
    log.debug("Finding all payments");
    var payments = new ArrayList<>(paymentService.findAll());
    log.debug("Found all payments: {}", payments);
    return new ResponseEntity<>(payments, HttpStatus.OK);
  }

  @Operation(description = "Add new payment", tags = {"Payments", "Post"})
  @ApiResponses(
      value = {
          @ApiResponse(responseCode = "201", description = "Successfully added payment", content = @Content(schema = @Schema(implementation = PaymentDTO.class))),
          @ApiResponse(responseCode = "400", description = "Bad request (e.g., invalid payment data)")
      }
  )
  @PostMapping
  @JsonView(Views.Get.class)
  public ResponseEntity<PaymentDTO> add(
      @RequestBody @Valid @JsonView({Views.Post.class}) PaymentDTO payment) {
    if (payment.getId() != null) {
      log.debug("Payment id must be null");
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    log.debug("Adding payment: {}", payment);
    try {
      paymentService.add(payment);
      log.debug("Payment added: {}", payment);
      return new ResponseEntity<>(payment, HttpStatus.CREATED);
    } catch (Exception e) {
      log.debug("Payment not added: {} error: {}", payment, e.getMessage());
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

  }

  @Operation(description = "Get a specific payment by ID", tags = {"Payments", "Get"})
  @ApiResponses(
      value = {
          @ApiResponse(responseCode = "200", description = "Payment retrieved successfully", content = @Content(mediaType = "application/json", schema = @Schema(implementation = PaymentDTO.class))),
          @ApiResponse(responseCode = "404", description = "Payment not found")
      })
  @GetMapping("/{id}")
  @JsonView(Views.Get.class)
  public ResponseEntity<PaymentDTO> findById(@PathVariable Integer id) {
    log.debug("Finding payment by id {}", id);
    try {
      PaymentDTO paymentDTO = paymentService.findById(id);
      log.debug("Found payment by id {}: {}", id, paymentDTO);
      return new ResponseEntity<>(paymentDTO, HttpStatus.OK);
    } catch (NoSuchElementException e) {
      log.debug("Payment with id {} not found", id);
    }

    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @Operation(description = "Update payment information by ID", tags = {"Payments", "Put"})
  @ApiResponses(
      value = {
          @ApiResponse(responseCode = "200", description = "Payment updated successfully"),
          @ApiResponse(responseCode = "400", description = "Bad request (e.g., invalid payment data)"),
          @ApiResponse(responseCode = "404", description = "Payment not found"),
      })
  @PutMapping("/{id}")
  @JsonView(Views.Put.class)
  public ResponseEntity<PaymentDTO> update(@PathVariable Integer id,
      @RequestBody PaymentDTO payment) {
    log.debug("Updating payment with id {}: {}", id, payment);
    try {
      paymentService.update(id, payment);
      log.debug("Payment with id {} updated", id);
      return new ResponseEntity<>(payment, HttpStatus.OK);
    } catch (NoSuchElementException e) {
      log.debug("Payment with id {} not found, cannot update", id);
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } catch (Exception e) {
      log.debug("Payment with id {} not updated, error: {}", id, e.getMessage());
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  }

  @Operation(description = "Delete a payment by ID", tags = {"Payments", "Delete"})
  @ApiResponses(
      value = {
          @ApiResponse(responseCode = "204", description = "Payment deleted successfully"),
          @ApiResponse(responseCode = "404", description = "Payment not found")
      })
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Integer id) {
    try {
      log.debug("Deleting payment with id {}", id);
      paymentService.delete(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (NoSuchElementException e) {
      log.debug("Payment with id {} not found, cannot delete", id);
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @Operation(description = "Delete all payments", tags = {"Payments", "Delete"})
  @ApiResponses(
      value = {
          @ApiResponse(responseCode = "204", description = "All payments deleted successfully")
      })
  @DeleteMapping
  public ResponseEntity<Void> deleteAll() {
    log.debug("Deleting all payments");
    paymentService.deleteAll();
    log.debug("All payments deleted");
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
