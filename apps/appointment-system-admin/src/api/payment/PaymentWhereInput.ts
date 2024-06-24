import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  appointment?: AppointmentWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  method?: "Option1";
};
