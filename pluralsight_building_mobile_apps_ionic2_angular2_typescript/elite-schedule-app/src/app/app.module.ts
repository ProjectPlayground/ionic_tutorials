import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyApp } from './app.component';

import { GamePage, MyTeamsPage, StandingsPage, TeamDetailPage, TeamHomePage, TeamsPage, TournamentsPage } from '../pages/pages';
import { EliteApi, UserSettings } from './shared/shared';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    MyTeamsPage,
    StandingsPage,
    TeamDetailPage,
    TeamHomePage,
    TeamsPage,
    TournamentsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBBx74xkaDJi1mHLRGpqGOdVzajBEeiK4k' }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    MyTeamsPage,
    StandingsPage,
    TeamDetailPage,
    TeamHomePage,
    TeamsPage,
    TournamentsPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi,
    Storage,
    UserSettings,
  ]
})
export class AppModule {}
