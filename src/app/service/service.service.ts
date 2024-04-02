import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient:HttpClient) { }

  getPokemonData():Observable<any> {
    const header = new HttpHeaders().set('Content-type','application/json')
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/metagross')
  }
  shinyBidoof():Observable<any> {
    const header = new HttpHeaders().set('Content-type','application/json')
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/bidoof')
  }
}
