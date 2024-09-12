import { Component, Input } from '@angular/core';
import { IEntityModel, IPokemonModel, ISpritesModel } from 'src/app/Models';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'shared-card-pokemon',
  standalone: false,
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent {
  @Input() pokemon?: IPokemonModel;
  image: boolean = true;

  constructor() {}
  imagePokemon(): string {
    let caseImage: number = 0;
    if (this.pokemon?.sprites?.other?.dream_world?.front_default == null)
      caseImage = 1;
    if (this.pokemon?.sprites?.front_default == null) caseImage = 2;
    if (this.pokemon?.sprites?.other?.home?.front_default == null)
      caseImage = 3;
    if (
      this.pokemon?.sprites?.other?.dream_world?.front_default == null &&
      this.pokemon?.sprites?.front_default == null &&
      this.pokemon?.sprites?.other?.home?.front_default == null
    )
      this.image = false;
    switch (caseImage) {
      case 1:
        return this.pokemon?.sprites?.front_default ?? '';
      case 2:
        return this.pokemon?.sprites?.other?.home?.front_default ?? '';
      case 3:
        return this.pokemon?.sprites?.other?.home?.front_shiny ?? '';
      default:
        return this.pokemon?.sprites?.other?.dream_world?.front_default ?? '';
    }
  }
  statsHp(): number {
    return this.pokemon?.stats[0].base_stat ?? 0;
  }
  getTypeColor(typeName: string): string {
    switch (typeName) {
      case 'bug':
        return '#A8B820'; // Verde amarillento
      case 'normal':
        return '#A8A878'; // Gris claro
      case 'electric':
        return '#F8D030'; // Amarillo
      case 'ground':
        return '#E0C068'; // Marrón claro
      case 'fairy':
        return '#EE99AC'; // Rosa claro
      case 'fighting':
        return '#C03028'; // Rojo oscuro
      case 'psychic':
        return '#F85888'; // Rosa intenso
      case 'rock':
        return '#B8A038'; // Marrón grisáceo
      case 'steel':
        return '#B8B8D0'; // Gris metálico
      case 'ghost':
        return '#705898'; // Púrpura
      case 'ice':
        return '#98D8D8'; // Azul claro
      case 'dragon':
        return '#7038F8'; // Violeta
      case 'grass':
        return '#47B400'; // Verde
      case 'poison':
        return '#CE0FFD'; // Púrpura brillante
      case 'fire':
        return '#EC3200'; // Rojo anaranjado
      case 'water':
        return '#6890f0'; // Azul
      case 'flying':
        return '#1297FE'; // Azul claro
      default:
        return '';
    }
  }
}
