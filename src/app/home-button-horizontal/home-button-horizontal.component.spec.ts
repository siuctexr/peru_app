import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeButtonHorizontalComponent } from './home-button-horizontal.component';

describe('HomeButtonHorizontalComponent', () => {
  let component: HomeButtonHorizontalComponent;
  let fixture: ComponentFixture<HomeButtonHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeButtonHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeButtonHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
