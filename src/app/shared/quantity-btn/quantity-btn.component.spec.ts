import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityBtnComponent } from './quantity-btn.component';

describe('QuantityBtnComponent', () => {
  let component: QuantityBtnComponent;
  let fixture: ComponentFixture<QuantityBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantityBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
