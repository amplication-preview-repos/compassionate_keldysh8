import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type StatisticsWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  metrics?: JsonFilter;
};
