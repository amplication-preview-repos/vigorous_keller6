import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  appointments?: AppointmentListRelationFilter;
  emailAddress?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
