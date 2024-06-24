import { AppointmentUpdateManyWithoutEmployeesInput } from "./AppointmentUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutEmployeesInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  position?: string | null;
};
