package com.tracker.backend.controller;

import com.tracker.backend.model.Payment;
import com.tracker.backend.service.PaymentService;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;
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

  @GetMapping
  public ResponseEntity<List<Payment>> findAll() {
    log.debug("Finding all payments");
    var payments = new ArrayList<>(paymentService.findAll());
    log.debug("Found all payments: {}", payments);
    return new ResponseEntity<>(payments, HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Payment> add(@RequestBody Payment payment) {
    if (payment.getId() != null) {
      log.debug("Payment id must be null");
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    log.debug("Adding payment: {}", payment);
    paymentService.add(payment);
    log.debug("Payment added: {}", payment);
    return new ResponseEntity<>(payment, HttpStatus.CREATED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Payment> findById(@PathVariable Integer id) {
    log.debug("Finding payment by id {}", id);
    try {
      Payment payment = paymentService.findById(id);
      log.debug("Found payment by id {}: {}", id, payment);
      return new ResponseEntity<>(payment, HttpStatus.OK);
    } catch (NoSuchElementException e) {
      log.debug("Payment with id {} not found", id);
    }

    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Payment> update(@PathVariable Integer id, @RequestBody Payment payment) {
    log.debug("Updating payment with id {}: {}", id, payment);
    try {
      paymentService.update(id, payment);
      log.debug("Payment with id {} updated", id);
      return new ResponseEntity<>(payment, HttpStatus.OK);
    } catch (NoSuchElementException e) {
      log.debug("Payment with id {} not found, cannot update", id);
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

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

  @DeleteMapping
  public ResponseEntity<Void> deleteAll() {
    log.debug("Deleting all payments");
    paymentService.deleteAll();
    log.debug("All payments deleted");
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
