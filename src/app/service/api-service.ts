import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    nom: string;
    url: string;
   
    constructor(private http: HttpClient, private apiService: ApiService) { }

    getPokemon(id: number) {
        return this.http.get("https://pokeapi.co/api/v2/pokemon/" +id+ "/");
    }

    getAllPokemon() {
       
       
    
        return this.http.get("https://pokeapi.co/api/v2/pokemon/");
         
    }



}
