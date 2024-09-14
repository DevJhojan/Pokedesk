import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResource } from '../Models/i-resource.model';
import { IPokemonModel } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private _httpClient: HttpClient) { }

  getAllPokemon():Observable<IResource>{
    return this._httpClient.get<IResource>(`${environment.url}${environment.allPokemon}`);
  }

  getOnePokemon(namePokemon:string):Observable<IPokemonModel>{
    return this._httpClient.get<IPokemonModel>(`${environment.url}/${namePokemon}`);
  }
  getAbility(ability: string):Observable<any>{
    return this._httpClient.get<any>(`${environment.urlAbilities}${ability}`);
  }
  getEspecie(namePokemon: string):Observable<any>{
    return this._httpClient.get<any>(`${environment.urlEspecies}${namePokemon}`)
  }
}
