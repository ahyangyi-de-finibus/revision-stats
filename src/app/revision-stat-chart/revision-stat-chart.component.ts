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
    scheme = {
        'domain': [
            "#378aba", // 700
            "#68c3e4", // 300
            "#3f9dcd", // 600
            "#8cd4ec", // 200
            "#3379a6", // 800
            "#53b7e0", // 400
            "#285a84", // 900
            "#46aadb", // 500
            "#b8e5f3", // 100
        ],
        }

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
