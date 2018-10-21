import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionStatTableComponent } from './revision-stat-table.component';

describe('RevisionStatTableComponent', () => {
  let component: RevisionStatTableComponent;
  let fixture: ComponentFixture<RevisionStatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionStatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionStatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
