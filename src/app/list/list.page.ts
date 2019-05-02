import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/BO/pokemon';
import { DataTransfertServiceService } from 'src/app/service/data-transfert-service.service'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api-service'

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    // récupére la liste des pokemons
    listPokemon: any[] = [];

    // récupére la liste des pokemons favoris
    listFavoris: Pokemon[];

    constructor(private router: Router, private dataTransfert: DataTransfertServiceService, private apiService: ApiService) {
        //  this.listFavoris = this.dataTransfert.getData();
        this.apiService.getAllPokemon().subscribe(val => {
            let result = val.results;
            this.listPokemon = result;
        });
    }

    ngOnInit() {
    }

    public inListFavori (data: number) {

    }
}
