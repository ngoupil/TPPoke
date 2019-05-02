import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTransfertServiceService } from 'src/app/service/data-transfert-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private router: Router, private DataTransfer: DataTransfertServiceService) {

    }

    goToList() {
        this.router.navigate(['/list']);
    }
    goToFight() {
        this.router.navigate(['/fights']);
    }

}
