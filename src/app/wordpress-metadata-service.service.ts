import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';

@Injectable({
    providedIn: 'root'
})

export class WordpressMetadataServiceService {

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<any[]>("https://blog.ahyangyi.org/wp-json/wp/v2/posts").pipe(map(x => x.map(y => {return {
            id: y.id,
            title: y.title.rendered,
            revisions: y._links['version-history'][0].count,
            };})));
    }
}
