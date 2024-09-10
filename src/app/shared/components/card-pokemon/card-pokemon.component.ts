import { Component, Input } from '@angular/core';
import { IEntityModel, IPokemonModel, ISpritesModel } from 'src/app/Models';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'shared-card-pokemon',
  standalone: false,
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent {
  @Input() pokemon?: IPokemonModel;

  constructor(){

  }
}
