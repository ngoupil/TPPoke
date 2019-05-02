import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/BO/pokemon';
import { ApiService } from 'src/app/service/api-service'

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor() { }

    listFavoris: Pokemon[];

    public getListfavoris() {
        return this.listFavoris;
    }

    public getAllPokemon() {
        return ApiService.prototype.getAllPokemon();
    }

    public addFavori(pokemon: Pokemon) {
        pokemon.id = this.listFavoris.length+1;
        this.listFavoris.push(pokemon);
    }


    public deleteFavori(pokemon: Pokemon) {
        let index = this.listFavoris.indexOf(pokemon);
        this.listFavoris.splice(index, 1);
    }


    public modifyPokemon(updatedPokemon: Pokemon) {
        let tmpPokemon = this.listFavoris.find(function (t) {
            return t.id == updatedPokemon.id;
        });

        let pos = this.listFavoris.indexOf(tmpPokemon);

        this.listFavoris[pos] = updatedPokemon;
    }


    public changeAlias(alias: string, pokemon: Pokemon) {
        pokemon.name = alias;
        let tmpPokemon = this.listFavoris.find(function (t) {
            return t.id == pokemon.id;
        });

        let pos = this.listFavoris.indexOf(tmpPokemon);
        this.listFavoris[pos] = pokemon;
    }

}
