import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Post } from '../post';

@Component({
    selector: 'app-revision-stat-chart',
    templateUrl: './revision-stat-chart.component.html',
    styleUrls: ['./revision-stat-chart.component.scss']
})
export class RevisionStatChartComponent implements OnInit, OnChanges {
    @Input() data: Post[];

    results: any;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.data && this.data) {
            this.results = this.data.map(x => {return{
            "name": x.title,
            "value": x.revisions,
            };});
        }
    }
}
