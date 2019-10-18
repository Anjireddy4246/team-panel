import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobieReviewFbComponent } from './add-mobie-review-fb.component';

describe('AddMobieReviewFbComponent', () => {
  let component: AddMobieReviewFbComponent;
  let fixture: ComponentFixture<AddMobieReviewFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMobieReviewFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMobieReviewFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
