import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  appointment?: AppointmentWhereUniqueInput | null;
  date?: Date | null;
  method?: "Option1" | null;
};
