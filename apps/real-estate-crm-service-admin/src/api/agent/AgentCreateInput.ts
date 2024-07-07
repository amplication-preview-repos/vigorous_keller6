import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";
import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
  emailAddress?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
};
