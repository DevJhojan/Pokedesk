import { IPokemonModel } from './pokemon.model';
export interface IResource{
  count: number;
  next: null;
  previous: null;
  results: IPokemonModel[]
}
