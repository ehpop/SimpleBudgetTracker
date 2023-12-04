package com.tracker.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.OffsetDateTime;
import java.util.Date;
import javax.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;
import javax.validation.constraints.NotNull;

@Entity
@Table
@Setter
@Getter
@ToString
@SuperBuilder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Payment {

  @Id
  @GeneratedValue
  private Integer id;

  @Column(nullable = false)
  @NotNull
  @NotEmpty
  private String name;

  @Column(nullable = false)
  @NotNull
  @NotEmpty
  private String description;

  @Column(nullable = false)
  @NotEmpty
  @NotNull
  private Double amount;

  @Column(nullable = false)
  @NotEmpty
  @NotNull
  private OffsetDateTime date;

  @Column(nullable = false)
  @NotEmpty
  @NotNull
  private String userId;

  @Column(nullable = false)
  @NotEmpty
  @NotNull
  private String category;

  @Column(nullable = false)
  @NotEmpty
  @NotNull
  private String type;

  public void updatePayment(Payment payment) {
    this.name = payment.getName();
    this.description = payment.getDescription();
    this.amount = payment.getAmount();
    this.date = payment.getDate();
    this.category = payment.getCategory();
    this.type = payment.getType();
  }
}
