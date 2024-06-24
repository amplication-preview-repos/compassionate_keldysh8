import { SortOrder } from "../../util/SortOrder";

export type StatisticsOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  metrics?: SortOrder;
  updatedAt?: SortOrder;
};
