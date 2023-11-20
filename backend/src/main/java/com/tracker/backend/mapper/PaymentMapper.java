package com.tracker.backend.mapper;

import com.tracker.backend.dto.PaymentDTO;
import com.tracker.backend.model.Payment;
import java.time.OffsetDateTime;
import org.mapstruct.Mapper;

@Mapper
public interface PaymentMapper {

  PaymentDTO paymentToPaymentDTO(Payment payment);

  Payment paymentDTOToPayment(PaymentDTO paymentDTO);

  default OffsetDateTime map(String date) {
    return OffsetDateTime.parse(date);
  }

  default String map(OffsetDateTime date) {
    return date.toString();
  }
}
