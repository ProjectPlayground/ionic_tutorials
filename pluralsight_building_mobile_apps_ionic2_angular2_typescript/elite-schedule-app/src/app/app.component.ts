import { Component, ViewChild } from '@angular/core';
import { Events, LoadingController, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MyTeamsPage, TeamHomePage, TournamentsPage } from '../pages/pages';
import { EliteApi, UserSettings } from './shared/shared';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams: any[];
  rootPage: any = MyTeamsPage;
  
  constructor(
    private eliteApi: EliteApi,
    private events: Events,
    private loadingController: LoadingController,
    public platform: Platform,
    private userSettings: UserSettings) {
    this.initializeApp();
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.refreshFavorites();
      this.events.subscribe('favorites:changed', () => this.refreshFavorites());
    });
  }

  refreshFavorites() {
    this.favoriteTeams = this.userSettings.getAllFavorites();
  }
  
  goHome() {
    this.nav.push(MyTeamsPage);
  }

  goToTeam(favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true,
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(l => this.nav.push(TeamHomePage, favorite.team))
  }

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }
}
