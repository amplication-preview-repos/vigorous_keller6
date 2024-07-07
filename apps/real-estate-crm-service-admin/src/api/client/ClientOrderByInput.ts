import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  createdAt?: SortOrder;
  emailAddress?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
