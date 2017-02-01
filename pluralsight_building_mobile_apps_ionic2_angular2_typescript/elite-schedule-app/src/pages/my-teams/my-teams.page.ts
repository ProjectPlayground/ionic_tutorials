import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { TeamHomePage, TournamentsPage } from '../pages';
import { EliteApi, UserSettings } from '../../app/shared/shared';

@Component({
  selector: 'my-teams-page',
  templateUrl: 'my-teams.page.html',
})
export class MyTeamsPage {

  favorites: any[];

  constructor(
    private eliteApi: EliteApi,
    private loadingController: LoadingController,
    private nav: NavController,
    private userSettings: UserSettings) {
  }

  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true,
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
        .subscribe(t => this.nav.push(TeamHomePage, favorite.team));
  }

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }

  ionViewDidEnter() {
    this.userSettings.getAllFavorites().then(favs => { this.favorites = favs });
  }

}
