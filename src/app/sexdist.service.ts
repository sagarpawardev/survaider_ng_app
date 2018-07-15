import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SexDistResponse } from './response'

@Injectable({ providedIn: 'root' })
export class SexdistService {
	private API_URL = environment.apiUrl+"/sexdist/";
  constructor(private _http: HttpClient) { }

  getData(){
  	return this._http
  		.get(this.API_URL)
  		.pipe(map(result => result));
  		/*.map(response => {
		      const todos = response.json();
		      return todos.map((todo) => new Todo(todo));
		    })
		    .catch(this.handleError);*/
	}

  	private handleError<T> (operation = 'operation', result?: T) {
	  	return (error: any): Observable<T> => {
		    console.error(error);
		    return of(result as T);
	  	};
	}
}

