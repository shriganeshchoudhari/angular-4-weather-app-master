import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCitiesComponent } from './find-cities.component';

describe('FindCitiesComponent', () => {
  let component: FindCitiesComponent;
  let fixture: ComponentFixture<FindCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
