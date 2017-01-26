import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EliteApi {

    private baseUrl = 'https://elite-schedule-app-i2-281d6.firebaseio.com';

    constructor(private http: Http) {
    }

    getTournaments() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe(res => resolve(res.json()));
        });
    }

}
