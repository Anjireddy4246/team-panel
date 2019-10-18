import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieReviewModelComponent } from './add-movie-review-model.component';

describe('AddMovieReviewModelComponent', () => {
  let component: AddMovieReviewModelComponent;
  let fixture: ComponentFixture<AddMovieReviewModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieReviewModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieReviewModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
