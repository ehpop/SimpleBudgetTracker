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

  public Payment findById(Integer id) {
    log.info("Finding payment by id {}", id);
    var payment = paymentRepository.findById(id);
    log.info("Found payment by id {}: {}", id, paymentRepository.findById(id));
    return payment.orElseThrow();
  }

  public void update(Integer id, Payment payment) {
    log.info("Updating payment with id {}: {}", id, payment);
    var paymentToUpdate = paymentRepository.findById(id).orElseThrow();
    paymentToUpdate.updatePayment(payment);
    paymentRepository.save(paymentToUpdate);
    log.info("Payment with id {} updated", id);
  }

  public void delete(Integer id) {
    log.info("Deleting payment with id {}", id);
    paymentRepository.delete(paymentRepository.findById(id).orElseThrow());
    log.info("Payment with id {} deleted", id);
  }

  public void deleteAll() {
    log.info("Deleting all payments");
    paymentRepository.deleteAll();
    log.info("All payments deleted");
  }
}
