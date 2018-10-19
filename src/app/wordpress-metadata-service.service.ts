import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WordpressMetadataServiceService {

    constructor(private http: HttpClient) { }

    getPosts(): Observable<any[]> {
        return this.http.get<any[]>("https://blog.ahyangyi.org/wp-json/wp/v2/posts");
    }
}
