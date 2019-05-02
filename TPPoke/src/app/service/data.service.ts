import { Injectable } from '@angular/core';
import { Pokemon } from 'TPPoke/src/app/BO/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor() { }

    listFavoris: Pokemon[];

    public getListfavoris() {
        return this.listFavoris;
    }

    public addFavori(pokemon: Pokemon) {
        //@TODO  changer l'id
        // pokemon.id = this.listFavori.length+1;
        this.listFavoris.push(pokemon);
    }


    public deleteFavori(pokemon: Pokemon) {
        //@TODO  changer l'id
         let index = this.listFavoris.indexOf(pokemon);
        this.listFavori.splice(index, 1);
    }

    public changeAlias(alias: string, pokemon: Pokemon) {
        //@TODO changer 
        pokemon.alias

    }
}
