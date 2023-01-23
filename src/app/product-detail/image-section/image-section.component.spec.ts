import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSectionComponent } from './image-section.component';

describe('ImageSectionComponent', () => {
  let component: ImageSectionComponent;
  let fixture: ComponentFixture<ImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
