package com.tracker.backend.dto;

import com.fasterxml.jackson.annotation.JsonView;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

@Value
@Builder
@Jacksonized
public class PaymentDTO {

  @Schema(description = "Unique identifier of the payment.", example = "1")
  @JsonView(Views.Get.class)
  Integer id;

  @Schema(description = "Name of the payment.", example = "Rent")
  @JsonView({Views.Post.class, Views.Put.class, Views.Get.class})
  String name;

  @Schema(description = "Description of the payment.", example = "Monthly rent payment.")
  @JsonView({Views.Post.class, Views.Put.class, Views.Get.class})
  String description;

  @Schema(description = "Amount of the payment.", example = "1000.0")
  @JsonView({Views.Post.class, Views.Put.class, Views.Get.class})
  Double amount;

  @Schema(description = "Date of the payment.", example = "2021-10-28")
  @JsonView({Views.Post.class, Views.Put.class, Views.Get.class})
  String date;

  @Schema(description = "User ID of the payment.", example = "1")
  @JsonView({Views.Post.class, Views.Put.class, Views.Get.class})
  String userId;

  @Schema(description = "Category of the payment.", example = "Living expenses")
  @JsonView({Views.Post.class, Views.Put.class, Views.Get.class})
  String category;

}
