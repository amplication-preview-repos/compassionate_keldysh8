import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { PaymentUpdateManyWithoutAppointmentsInput } from "./PaymentUpdateManyWithoutAppointmentsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AppointmentUpdateInput = {
  customer?: string | null;
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutAppointmentsInput;
  service?: ServiceWhereUniqueInput | null;
  status?: "Option1" | null;
};
