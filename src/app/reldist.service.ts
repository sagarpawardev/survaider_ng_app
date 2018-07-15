import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReldistService {

  private API_URL = environment.apiUrl+"/reldist/";
  constructor(private _http: HttpClient) { }

  getData(){
  	return this._http
  		.get(this.API_URL)
  		.pipe(map(result => result));
	}
}
