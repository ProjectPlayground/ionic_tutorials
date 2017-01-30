import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../app/shared/shared';

@Component({
  selector: 'game-page',
  templateUrl: 'game.page.html'
})
export class GamePage {

  game: any = {};

  constructor(private nav: NavController,
              private navParams: NavParams,
              private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    this.game = this.navParams.data;
    this.game.gameTime = Date.parse(this.game.time);
  }

  teamTapped(teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.nav.push(TeamHomePage, team);
  }

  goToDirections() {
    // Placeholder
  }

  goToMap() {
    // Placeholder
  }

  isWinner(score1, score2) {
    return Number(score1) > Number(score2);
  }

}
