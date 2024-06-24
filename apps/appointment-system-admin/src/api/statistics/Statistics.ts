import { JsonValue } from "type-fest";

export type Statistics = {
  createdAt: Date;
  date: Date | null;
  id: string;
  metrics: JsonValue;
  updatedAt: Date;
};
