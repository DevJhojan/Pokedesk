import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IResource } from '../Models/i-resource.model';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private _httpClient: HttpClient) { }

  getAllPokemon():Observable<IResource>{
    return this._httpClient.get<IResource>(`${environment.url}${environment.allPokemon}`);
  }
}
