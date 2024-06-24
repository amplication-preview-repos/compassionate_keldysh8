import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPOINTMENT_TITLE_FIELD } from "./AppointmentTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer" source="customer" />
        <TextField label="date" source="date" />
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Service" source="service.id" reference="Service">
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Payment"
          target="appointmentId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="Appointment"
              source="appointment.id"
              reference="Appointment"
            >
              <TextField source={APPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="method" source="method" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
