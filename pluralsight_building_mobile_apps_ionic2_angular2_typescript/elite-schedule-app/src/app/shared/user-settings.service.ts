import { Storage } from '@ionic/storage';

import * as _ from 'lodash';

export class UserSettings {
    storage = new Storage(['localstorage']);

    constructor() {
    }

    favoriteTeam(team, tournamentId, tournamentName) {
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(team.id.toString(), item);
    }

    unfavoriteTeam(team) {
        this.storage.remove(team.id.toString());
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
