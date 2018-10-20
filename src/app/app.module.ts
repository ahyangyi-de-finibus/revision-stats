import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RevisitionStatChartComponent } from './revisition-stat-chart/revisition-stat-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        RevisitionStatChartComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
