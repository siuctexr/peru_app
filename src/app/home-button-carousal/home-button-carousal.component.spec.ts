import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeButtonCarousalComponent } from './home-button-carousal.component';

describe('HomeButtonCarousalComponent', () => {
  let component: HomeButtonCarousalComponent;
  let fixture: ComponentFixture<HomeButtonCarousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeButtonCarousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeButtonCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
