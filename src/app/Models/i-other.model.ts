export interface IOtherModel {
  dream_world: IDreamWorldModel;
  home?: IHome;
  official_artwork?: any;
  showdown?: any;
}

export interface IDreamWorldModel {
  front_default?: string;
  front_famale?: string;
}

export interface IHome {
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}
