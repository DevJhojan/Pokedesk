import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemonModel } from 'src/Models/pokemon.model';
const basePokemon = 'https://pokeapi.co/api/v2/pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokedeskService {

  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<IPokemonModel> {
    return this.http.get<any>(`${basePokemon}/${id}`).pipe();
  }

  getSearchPokemon(search: string){
    return this.http.get(`${basePokemon}/${search}`);
  }
}
