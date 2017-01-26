import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamsPage } from '../pages';

import { EliteApi } from '../../app/shared/shared';

@Component({
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {

  tournaments: any;

  constructor(private nav: NavController, private eliteApi: EliteApi) {
  }

  itemTapped($event, tournament) {
    this.nav.push(TeamsPage, tournament);
  }

  ionViewDidLoad() {    
    this.eliteApi.getTournaments().then(data => this.tournaments = data);
  }

  ionViewWillEnter() {  
    console.log('## lifecycle ## ionViewWillEnter');  
  }

  ionViewWillLeave() {  
    console.log('## lifecycle ## ionViewWillLeave');  
  }

  ionViewDidUnload() {
    console.log('## lifecycle ## ionViewDidUnload');  
  }

}
