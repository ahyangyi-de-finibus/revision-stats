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
            '#63B2FF', // A400
            '#165A94', // 900
            '#96CBFF', // A200
            '#378ABA', // 500
            '#C3DCEA', // 100
            '#49A6FF', // A700
            '#559CC4', // 400
            '#236DA3', // 800
            '#73ADCF', // 300
            '#2A77AB', // 700
            '#9BC5DD', // 200
            '#3182B3', // 600
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
