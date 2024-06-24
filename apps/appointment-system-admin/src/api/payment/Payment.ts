import { Appointment } from "../appointment/Appointment";

export type Payment = {
  amount: number | null;
  appointment?: Appointment | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  method?: "Option1" | null;
  updatedAt: Date;
};
