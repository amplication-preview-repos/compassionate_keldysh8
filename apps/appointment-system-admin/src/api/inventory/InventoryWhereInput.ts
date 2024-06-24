import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryWhereInput = {
  id?: StringFilter;
  itemName?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
