import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  appointment?: AppointmentWhereUniqueInput | null;
  date?: Date | null;
  method?: "Option1" | null;
};
