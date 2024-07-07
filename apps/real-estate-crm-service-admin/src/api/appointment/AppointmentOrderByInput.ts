import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  agentId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  dateAndTime?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
