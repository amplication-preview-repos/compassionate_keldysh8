import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "customer";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.customer?.toString() || String(record.id);
};
