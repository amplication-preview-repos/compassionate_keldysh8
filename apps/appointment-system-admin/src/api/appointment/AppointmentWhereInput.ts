import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AppointmentWhereInput = {
  customer?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  service?: ServiceWhereUniqueInput;
  status?: "Option1";
};
