import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';


@Injectable()
export class StoriesService {

  constructor(private http: HttpClient) { }

  getTopStories(): Observable<any> {
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
                    .map(response => response);
                
  }

}
