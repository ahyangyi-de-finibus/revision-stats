import { Component, OnInit } from '@angular/core';
import { WordpressMetadataServiceService } from './wordpress-metadata-service.service';
import { Post } from './post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'RevisionStats';
    data: Post[];

    constructor(private wordpressMetadataServiceService: WordpressMetadataServiceService) { }

    ngOnInit() {
        this.wordpressMetadataServiceService.getPosts()
            .subscribe(posts => this.data = posts);
    }
}
