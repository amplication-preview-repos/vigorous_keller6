import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  emailAddress?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
