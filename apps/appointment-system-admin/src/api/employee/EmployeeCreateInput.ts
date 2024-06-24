import { AppointmentCreateNestedManyWithoutEmployeesInput } from "./AppointmentCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutEmployeesInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  position?: string | null;
};
