import * as React from "react";
import { Create, SimpleForm, CreateProps, DateTimeInput } from "react-admin";

export const StatisticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <div />
      </SimpleForm>
    </Create>
  );
};
