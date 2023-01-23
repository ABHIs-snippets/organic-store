import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSectionComponent } from './control-section.component';

describe('ControlSectionComponent', () => {
  let component: ControlSectionComponent;
  let fixture: ComponentFixture<ControlSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
