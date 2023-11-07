package com.tracker.backend.controller;

import com.tracker.backend.model.Payment;
import com.tracker.backend.service.PaymentService;
import java.util.Collection;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
}
