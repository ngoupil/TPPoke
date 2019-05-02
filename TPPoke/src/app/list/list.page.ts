import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'TPPoke/src/app/BO/pokemon';
import { DataTransfertServiceService } from 'src/app/service/data-transfert-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

   
    constructor(private router: Router, private dataTransfert: DataTransfertServiceService) {

        // récupére la liste des pokemons

        // donne la liste des pokemons favoris
        


    }

  ngOnInit() {
  }

}
