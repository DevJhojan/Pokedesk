import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, share } from 'rxjs';
import { Pokemon } from 'src/Models/pokemon.model';

const basePokemon = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: any;

  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<any> {
    return this.http.get<any>(`${basePokemon}/${id}`).pipe();
  }

  getSearchPokemon(search: string){
    return this.http.get(`${basePokemon}/${search}`);
  }
}
