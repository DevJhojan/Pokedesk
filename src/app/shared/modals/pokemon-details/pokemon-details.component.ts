import { Component, Inject } from '@angular/core';
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
  abilityDescription : any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IPokemonModel,
    private pokeApiService: PokeApiService
  ) {}

  getDescriptionHability(ability: string) {
     this.pokeApiService.getAbility(ability)
    .subscribe((ability: any)=>{
      this.abilityDescription = ability
    })
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
  getAbilityColor(abilityName: string): string {
    switch (abilityName) {
      case 'overgrow':
        return '#78C850'; // Verde para habilidades relacionadas con plantas
      case 'blaze':
        return '#F08030'; // Naranja para habilidades de fuego
      case 'torrent':
        return '#6890F0'; // Azul para habilidades de agua
      case 'shield-dust':
        return '#B8A038'; // Marrón para habilidades defensivas
      case 'shed-skin':
        return '#A8B820'; // Verde amarillento para habilidades de cambio de piel
      case 'intimidate':
        return '#C03028'; // Rojo oscuro para habilidades intimidantes
      case 'levitate':
        return '#705898'; // Púrpura para habilidades de levitación
      case 'swarm':
        return '#A8B820'; // Verde amarillento para habilidades de enjambre
      case 'keen-eye':
        return '#A8A878'; // Gris claro para habilidades de visión aguda
      case 'static':
        return '#F8D030'; // Amarillo para habilidades eléctricas
      case 'guts':
        return '#C03028'; // Rojo para habilidades que aumentan el poder
      case 'run-away':
        return '#EE99AC'; // Rosa claro para habilidades de escape
      case 'compound-eyes':
        return '#B8A038'; // Marrón para habilidades de visión
      case 'pressure':
        return '#705898'; // Púrpura para habilidades de presión
      case 'flash-fire':
        return '#F08030'; // Naranja para habilidades de inmunidad al fuego
      case 'serene-grace':
        return '#FFB6C1'; // Rosa para habilidades que mejoran efectos adicionales
      case 'poison-point':
        return '#A040A0'; // Púrpura para habilidades de veneno
      case 'inner-focus':
        return '#A8A878'; // Gris para habilidades de concentración
      default:
        return '#D3D3D3'; // Color gris claro para habilidades desconocidas o sin color definido
    }
  }
}
