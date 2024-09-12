import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AllPokemonsComponent } from './common/all-pokemons/all-pokemons.component';
import { FormsModule } from '@angular/forms';

//todo: Hay que hacer modal para mostrar todos los datos del pokemon

@NgModule({
  declarations: [AppComponent, AllPokemonsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    NgxChartsModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
