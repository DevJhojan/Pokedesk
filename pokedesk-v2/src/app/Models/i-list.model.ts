import { IEntityModel } from './i-entity.model';

export interface IListModel {
  count: number;
  next: string;
  privious: any;
  results: IEntityModel[];
}
