import { Employee } from "../employee/Employee";
import { Payment } from "../payment/Payment";
import { Service } from "../service/Service";

export type Appointment = {
  createdAt: Date;
  customer: string | null;
  date: Date | null;
  employee?: Employee | null;
  id: string;
  payments?: Array<Payment>;
  service?: Service | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
