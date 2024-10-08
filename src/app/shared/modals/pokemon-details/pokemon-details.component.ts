import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { subscribeOn } from 'rxjs';
import { IPokemonModel } from 'src/app/Models';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-pokemon-details',
  standalone: false,
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  image: boolean = true;
  ability?: any;
  descriptionShow: string = '';
  abilityDescriptions: { [key: string]: string } = {};
  descriptionPokemon: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IPokemonModel,
    private pokeApiService: PokeApiService
  ) {
    this.getDescriptionPokemon();
  }
  getDescriptionPokemon() {
    this.pokeApiService.getEspecie(this.data.species?.name ?? '').subscribe((especie: any) => {
      for (let flavor_text_entry of especie.flavor_text_entries) {
        if (flavor_text_entry.language.name == 'en') {
          this.descriptionPokemon = flavor_text_entry.flavor_text;
        }
      }
    });
  }
  imagePokemon(): string {
    let caseImage: number = 0;
    if (this.data?.sprites?.other?.dream_world?.front_default == null)
      caseImage = 1;
    if (this.data?.sprites?.front_default == null) caseImage = 2;
    if (this.data?.sprites?.other?.home?.front_default == null) caseImage = 3;
    if (
      this.data?.sprites?.other?.dream_world?.front_default == null &&
      this.data?.sprites?.front_default == null &&
      this.data?.sprites?.other?.home?.front_default == null
    )
      this.image = false;
    switch (caseImage) {
      case 1:
        return this.data?.sprites?.front_default ?? '';
      case 2:
        return this.data?.sprites?.other?.home?.front_default ?? '';
      case 3:
        return this.data?.sprites?.other?.home?.front_shiny ?? '';
      default:
        return this.data?.sprites?.other?.dream_world?.front_default ?? '';
    }
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
