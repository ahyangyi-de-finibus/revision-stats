import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { BarChartModule } from '@swimlane/ngx-charts/release/bar-chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RevisionStatChartComponent } from './revision-stat-chart/revision-stat-chart.component';
import { RevisionStatTableComponent } from './revision-stat-table/revision-stat-table.component';

@NgModule({
    declarations: [
        AppComponent,
        RevisionStatChartComponent,
        RevisionStatTableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        BarChartModule,
        NgbTabsetModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
