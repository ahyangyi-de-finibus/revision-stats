import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
    selector: 'app-revision-stat-table',
    templateUrl: './revision-stat-table.component.html',
    styleUrls: ['./revision-stat-table.component.scss']
})
export class RevisionStatTableComponent implements OnInit {
    @Input() data: Post[];

    constructor() { }

    ngOnInit() {
    }
}
