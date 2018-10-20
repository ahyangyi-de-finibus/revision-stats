import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisitionStatChartComponent } from './revisition-stat-chart.component';

describe('RevisitionStatChartComponent', () => {
  let component: RevisitionStatChartComponent;
  let fixture: ComponentFixture<RevisitionStatChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisitionStatChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisitionStatChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
