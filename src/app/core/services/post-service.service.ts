import { Injectable } from '@angular/core';

// para utilizar httpclient
import { HttpClient } from '@angular/common/http';

// modelos
import { Post } from './../models/post';
import { Comments } from './../models/comments';

// observable
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// environment
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private httpClient: HttpClient ) { }


  getList(): Observable<Post[]>{
    const path = `${environment.api_jsonplaceholder}/posts`;
    return this.httpClient.get<Post[]>(path);
    // .pipe(map((post: Post[]) => post));
  }

  getComents(id: string): Observable<Comments[]>{
    const path = `${environment.api_jsonplaceholder}/posts/${id}/comments`;
    return this.httpClient.get<Comments[]>(path);
    // .pipe(map((comment: Comments[]) => comment));
  }
}
