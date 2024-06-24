import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { PaymentCreateNestedManyWithoutAppointmentsInput } from "./PaymentCreateNestedManyWithoutAppointmentsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AppointmentCreateInput = {
  customer?: string | null;
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutAppointmentsInput;
  service?: ServiceWhereUniqueInput | null;
  status?: "Option1" | null;
};
