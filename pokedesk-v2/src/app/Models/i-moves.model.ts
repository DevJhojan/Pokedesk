import { IEntityModel } from "./i-entity.model";
import { IVersionGroupDetails } from "./i-version-group-details.model";

export interface IMovesModel{
  move: IEntityModel;
  version_group_details: IVersionGroupDetails[];
}
