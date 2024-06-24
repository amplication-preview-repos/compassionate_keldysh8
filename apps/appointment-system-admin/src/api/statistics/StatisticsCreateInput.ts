import { InputJsonValue } from "../../types";

export type StatisticsCreateInput = {
  date?: Date | null;
  metrics?: InputJsonValue;
};
