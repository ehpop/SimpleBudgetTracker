package com.tracker.backend.mapper;

import com.tracker.backend.dto.PaymentDTO;
import com.tracker.backend.model.Payment;
import org.mapstruct.Mapper;

@Mapper
public interface PaymentMapper {

  PaymentDTO paymentToPaymentDTO(Payment payment);

  Payment paymentDTOToPayment(PaymentDTO paymentDTO);
}
