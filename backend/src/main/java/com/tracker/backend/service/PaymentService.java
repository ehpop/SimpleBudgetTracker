package com.tracker.backend.service;

import com.tracker.backend.model.Payment;
import com.tracker.backend.repository.PaymentRepository;
import java.util.Collection;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class PaymentService {
  private final PaymentRepository paymentRepository;

  public Collection<Payment> findAll(){
    log.info("Finding all payments");
    return paymentRepository.findAll();
  }

  public void add(Payment payment){
    log.info("Adding payment: {}", payment);
    paymentRepository.save(payment);
    log.info("Payment added: {}", payment);
  }

}
