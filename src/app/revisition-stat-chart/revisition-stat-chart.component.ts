import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Post } from '../post';

@Component({
    selector: 'app-revisition-stat-chart',
    templateUrl: './revisition-stat-chart.component.html',
    styleUrls: ['./revisition-stat-chart.component.scss']
})
export class RevisitionStatChartComponent implements OnInit, OnChanges {
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
