import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondryButtonComponent } from './secondry-button.component';

describe('SecondryButtonComponent', () => {
  let component: SecondryButtonComponent;
  let fixture: ComponentFixture<SecondryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondryButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
