import { IEntityModel } from './i-entity.model';
import { IPokemonModel } from './pokemon.model';
export interface IResource{
  count: number;
  next: null;
  previous: null;
  results: IEntityModel[]
}
