import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  date?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  serviceId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
