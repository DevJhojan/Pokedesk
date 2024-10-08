import { IAbilitiesModel } from './i-abilitie.model';
import { IEntityModel, IGameIndexModel } from './i-entity.model';
import { IMovesModel } from './i-moves.model';
import { ISpritesModel } from './i-sprites.model';
import { IStatModel } from './i-stats.model';
import { ITypeModel } from './i-type.model';
export interface IPokemonModel {
  abilities: IAbilitiesModel[];
  base_exprience: number;
  forms: IEntityModel[];
  game_indices: IGameIndexModel[];
  height: number;
  held_items: any[];
  id: number;
  base_experience: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMovesModel[];
  name: string;
  past_types: any[];
  species?: IEntityModel;
  sprites?: ISpritesModel;
  stats: IStatModel[];
  types: ITypeModel[];
  wight: number;
}
