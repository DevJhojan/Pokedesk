//*modulos
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';

//*componentes
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { SearchPokemonComponent } from './pages/search-pokemon/search-pokemon.component';
import { PokemonService } from '../Service';
import { PokemonFrontComponent } from './pages/pokemon-front/pokemon-front.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    SearchPokemonComponent,
    PokemonFrontComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    NgxChartsModule,
    ScrollingModule,
    CdkTableModule,
    ScrollingModule,
    InfiniteScrollModule
  ],

  providers: [PokemonService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
