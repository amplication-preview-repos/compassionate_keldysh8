import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  appointmentId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  updatedAt?: SortOrder;
};
