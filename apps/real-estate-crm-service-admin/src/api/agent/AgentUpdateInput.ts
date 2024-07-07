import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";
import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
  emailAddress?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyUpdateManyWithoutAgentsInput;
};
