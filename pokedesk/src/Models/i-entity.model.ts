export interface IEntityModel{
  name: string;
  url: string;
}

export interface IGameIndexModel{
  game_index: number;
  version: IEntityModel;
}
