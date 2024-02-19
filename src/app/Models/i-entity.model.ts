export interface IEntityModel{
  name: string;
  url: string;
}

export interface IGameIndexModel{
  game_index: number;
  version: IEntityModel;
}

export class EntityModel implements IEntityModel{
  name: string;
  url: string;
  constructor(name: string, url: string){
    this.name = name;
    this.url = url;
  }
}
