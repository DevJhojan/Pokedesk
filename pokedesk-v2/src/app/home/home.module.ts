//*modulos
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MatTableModule } from '@angular/material/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';

//*componentes
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { SearchPokemonComponent } from './pages/search-pokemon/search-pokemon.component';
import { PokemonService } from '../Service';
import { PokemonFrontComponent } from './pages/pokemon-front/pokemon-front.component';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    SearchPokemonComponent,
    PokemonFrontComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgxChartsModule,
    ScrollingModule,
    CdkTableModule,
  ],
  providers: [PokemonService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
