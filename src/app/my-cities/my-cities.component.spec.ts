import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCitiesComponent } from './my-cities.component';

describe('CityDetailsComponent', () => {
  let component: MyCitiesComponent;
  let fixture: ComponentFixture<MyCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
