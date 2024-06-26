import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListModel } from '../../models/i-list.model';
import { IPokemonModel } from '../../models/pokemon.model';
const detail_pokemon = 'https://pokeapi.co/api/v2/pokemon';
const list_pokemons = 'https://pokeapi.co/api/v2/pokemon?limit=';
const offset = '&offset=0';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getAllPokemons(limit: number): Observable<IListModel> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' });
    const requestOptions = { headers: headers };
    return this.http.get<IListModel>(
      `${list_pokemons}${limit}${offset}`,
      requestOptions
    );
  }

  getPokemon(name: string): Observable<IPokemonModel> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' });
    const requestOptions = { headers: headers };
    return this.http.get<IPokemonModel>(
      `${detail_pokemon}/${name}`,
      requestOptions
    );
  }
  getSearchPokemon(search: string): Observable<IPokemonModel> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' });
    const requestOptions = { headers: headers };
    return this.http.get<IPokemonModel>(
      `${detail_pokemon}/${search}`,
      requestOptions
    );
  }
}
