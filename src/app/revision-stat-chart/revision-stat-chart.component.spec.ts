import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionStatChartComponent } from './revision-stat-chart.component';

describe('RevisionStatChartComponent', () => {
  let component: RevisionStatChartComponent;
  let fixture: ComponentFixture<RevisionStatChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionStatChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionStatChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
