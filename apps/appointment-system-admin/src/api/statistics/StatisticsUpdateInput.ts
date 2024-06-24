import { InputJsonValue } from "../../types";

export type StatisticsUpdateInput = {
  date?: Date | null;
  metrics?: InputJsonValue;
};
