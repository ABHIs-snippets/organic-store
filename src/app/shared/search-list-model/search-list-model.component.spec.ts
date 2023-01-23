import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListModelComponent } from './search-list-model.component';

describe('SearchListModelComponent', () => {
  let component: SearchListModelComponent;
  let fixture: ComponentFixture<SearchListModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchListModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchListModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
