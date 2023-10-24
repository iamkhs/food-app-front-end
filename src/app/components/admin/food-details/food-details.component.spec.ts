import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsComponent } from './food-details.component';

describe('FoodDetailsComponent', () => {
  let component: FoodDetailsComponent;
  let fixture: ComponentFixture<FoodDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodDetailsComponent]
    });
    fixture = TestBed.createComponent(FoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
