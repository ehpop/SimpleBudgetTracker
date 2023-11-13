package com.tracker.backend.service;

import com.tracker.backend.dto.PaymentDTO;
import com.tracker.backend.mapper.PaymentMapper;
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
  private final PaymentMapper paymentMapper;

  public Collection<PaymentDTO> findAll() {
    log.info("Finding all payments");
    return paymentRepository.findAll().stream()
        .map(paymentMapper::paymentToPaymentDTO)
        .toList();
  }

  public PaymentDTO add(PaymentDTO paymentDTO) {
    log.info("Adding payment: {}", paymentDTO);
    var addedPayment = paymentRepository.save(paymentMapper.paymentDTOToPayment(paymentDTO));
    log.info("Payment added: {}", addedPayment);
    return paymentMapper.paymentToPaymentDTO(addedPayment);
  }

  public PaymentDTO findById(Integer id) {
    log.info("Finding payment by id {}", id);
    var payment = paymentRepository.findById(id);
    log.info("Found payment by id {}: {}", id, paymentRepository.findById(id));
    return payment.map(paymentMapper::paymentToPaymentDTO).orElseThrow();
  }

  public void update(Integer id, PaymentDTO paymentDTO) {
    log.info("Updating payment with id {}: {}", id, paymentDTO);
    var paymentToUpdate = paymentRepository.findById(id).orElseThrow();
    paymentToUpdate.updatePayment(paymentMapper.paymentDTOToPayment(paymentDTO));
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
