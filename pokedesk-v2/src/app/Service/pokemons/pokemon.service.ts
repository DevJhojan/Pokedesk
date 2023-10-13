import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListModel } from '../../Models/i-list.model';
import { IPokemonModel } from '../../Models/pokemon.model';
const detail_pokemon = 'https://pokeapi.co/api/v2/pokemon';
const list_pokemons = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0/';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<IListModel> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' });
    const requestOptions = { headers: headers };
    return this.http.get<IListModel>(`${list_pokemons}`, requestOptions);
  }

  getPokemon(id: number): Observable<IPokemonModel> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' });
    const requestOptions = { headers: headers };
    return this.http.get<IPokemonModel>(
      `${detail_pokemon}/${id}`,
      requestOptions
    );
  }
  getSearchPokemon(search: string) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' });
    const requestOptions = { headers: headers };
    return this.http.get(`${detail_pokemon}/${search}`, requestOptions);
  }
}
