import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import * as _ from 'lodash';

@Injectable()
export class UserSettings {
    storage = new Storage(['localstorage']);

    constructor(private events: Events) {
    }

    favoriteTeam(team, tournamentId, tournamentName) {
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(team.id.toString(), item);
        this.events.publish('favorites:changed');
    }

    unfavoriteTeam(team) {
        this.storage.remove(team.id.toString());
        this.events.publish('favorites:changed');
    }

    isFavoriteTeam(teamId) {
        return this.storage.get(teamId.toString()).then(value => value ? true : false);
    }

    getAllFavorites() {
        let items = [];
        _.forIn(window.localStorage, (v, k) => {
            items.push(JSON.parse(v));
        });
        return items.length ? items : null;
    }
}
