import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';
import { environment } from '../../../environments/environment';


@Injectable()
export class StoriesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTopStories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topstories.json`)
                    .map(response => response);              
  }

  getItem(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
                    .map(response => response); 
  } 

}