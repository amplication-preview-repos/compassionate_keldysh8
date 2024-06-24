import { Appointment } from "../appointment/Appointment";

export type Employee = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  position: string | null;
  updatedAt: Date;
};
