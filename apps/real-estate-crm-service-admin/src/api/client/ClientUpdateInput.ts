import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  emailAddress?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
