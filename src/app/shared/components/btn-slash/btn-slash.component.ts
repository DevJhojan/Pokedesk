import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'shared-btn-slash',
  templateUrl: './btn-slash.component.html',
  styleUrls: ['./btn-slash.component.scss'],
  animations: [
    trigger('animate', [
      state('inactive', style({
        transform: 'translateY(0)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateY(10px)',
        opacity: 1
      })),
      transition('inactive => active', animate('300ms ease-out')),
      transition('active => inactive', animate('300ms ease-in'))
    ])
  ]
})
export class BtnSlashComponent {
  @Input() nameAbility: string = "";
  descriptionAbility: string = "";
  animationState = 'inactive';
  state: boolean = false;
  constructor(private pokeApiService: PokeApiService) {
  }

  getDescriptionHability() {
    this.pokeApiService.getAbility(this.nameAbility).subscribe((ability: any) => {
        console.log(ability)
        for(let effect_entry of ability.effect_entries)
        {
            if(effect_entry.language.name == "en")
              this.descriptionAbility = effect_entry.effect;
              console.log(this.descriptionAbility)
        }
    });
  }

  slashConten(){
    this.getDescriptionHability();
    if (this.state == true){
      this.animationState = this.animationState === 'inactive' ? 'active' : 'inactive';
      setTimeout(()=>{
        this.state = false;
      }, 500);
    }else{
      setTimeout(()=>{
        this.animationState = this.animationState === 'inactive' ? 'active' : 'inactive';
      }, 500)
        this.state = true;
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
        return '#b66b48'; // Color gris claro para habilidades desconocidas o sin color definido
    }
  }
}
