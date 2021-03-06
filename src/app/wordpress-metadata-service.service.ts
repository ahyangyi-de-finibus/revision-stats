import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import * as he from 'he';

@Injectable({
    providedIn: 'root'
})

export class WordpressMetadataServiceService {

    constructor(private http: HttpClient) { }

    getDate(wpDateStr: string): Date {
        let datetime = wpDateStr.split('T');
        let date = datetime[0].split('-');
        let time = datetime[1].split(':');

        return new Date(Date.UTC(
            parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]), parseInt(time[0]), parseInt(time[1]), parseInt(time[2])
        ));
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<any[]>("https://blog.ahyangyi.org/wp-json/wp/v2/posts?per_page=100").pipe(map(x => x.map(y => {return {
            id: y.id,
            title: he.decode(y.title.rendered),
            revisions: y._links['version-history'][0].count,
            creation_time: this.getDate(y.date_gmt),
            modification_time: this.getDate(y.modified_gmt),
            };})));
    }
}
