import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

@Injectable()
export class SessionsService {
    private baseApiUrl = "https://api.msftignite.com.au/searchApi";
    private useApi = false;

    constructor(private http: Http){ }

    getAll() {
        if (this.useApi) {
            return this.getAllFromApi();
        }

        return this.http.get('/app/sessions/sessions.json')
    }

    getAllFromApi() {
        return this.http.post(`${this.baseApiUrl}/GetAllConfirmedFilteredSessions`, {})
    }
}