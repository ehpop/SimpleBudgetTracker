package com.tracker.backend.controller;

import com.tracker.backend.model.Payment;
import com.tracker.backend.service.PaymentService;
import java.util.Collection;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
  public Collection<Payment> findAll(){
    log.info("Finding all payments");
    return paymentService.findAll();
  }

  @PostMapping
  public void add(@RequestBody Payment payment){
    log.info("Adding payment: {}", payment);
    paymentService.add(payment);
    log.info("Payment added: {}", payment);
  }

  @GetMapping("/{id}")
  public Payment findById(@PathVariable Integer id) {
    log.debug("Finding payment by id {}", id);
    Payment payment = paymentService.findById(id);
    log.debug("Found payment by id {}: {}", id, payment);
    return payment;
  }

  @PutMapping("/{id}")
  public void update(@PathVariable Integer id, @RequestBody Payment payment) {
    log.debug("Updating payment with id {}: {}", id, payment);
    paymentService.update(id, payment);
    log.debug("Payment with id {} updated", id);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable Integer id) {
    log.debug("Deleting payment with id {}", id);
    paymentService.delete(id);
    log.debug("Payment with id {} deleted", id);
  }

  @DeleteMapping
  public void deleteAll() {
    log.debug("Deleting all payments");
    paymentService.deleteAll();
    log.debug("All payments deleted");
  }
}
