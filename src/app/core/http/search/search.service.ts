import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getUsers(searchParam, searchType) {
    const params = new HttpParams({fromString: `q=${searchParam}`});
    return this.http.get(`${this.config.endpoint}search/${searchType}`, { params });
  }

}
