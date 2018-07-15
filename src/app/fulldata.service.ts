import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FulldataService {
  private page = 0;
  private PAGE_SIZE = environment.fetch_rate;
  private API_URL = environment.apiUrl+"/fulldata";
  constructor(private _http: HttpClient) { 
  	this.page=0;
  }

  resetFlag(){
    this.page = 0;
  }

  getData(){
  	var api = this.API_URL+"/"+this.page+"/?size="+this.PAGE_SIZE;
  	this.page++;

  	//var api = this.API_URL+"/";
  	console.log(api);
  	return this._http
  		.get(api)
  		.pipe(map(result => result));
	}
}

