import * as React from "react";
import { Edit, SimpleForm, EditProps, DateTimeInput } from "react-admin";

export const StatisticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
