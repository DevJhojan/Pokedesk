import { Component, Input } from '@angular/core';
import { IPokemonModel, ISpritesModel } from 'src/app/Models';

@Component({
  selector: 'shared-card-pokemon',
  standalone: false,
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent {
  @Input() img1!: IPokemonModel;

  constructor(){
    console.log(this.img1)
  }
}
