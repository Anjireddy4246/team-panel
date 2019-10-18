import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'add-mobie-review-fb',
  templateUrl: './add-mobie-review-fb.component.html',
  styleUrls: ['./add-mobie-review-fb.component.css']
})
export class AddMobieReviewFbComponent implements OnInit {

  movieReviewFrom: FormGroup;
  //rating = new FormControl('', Validators.required );
  constructor(private fb: FormBuilder) {

  }

  get rating() {
    return this.movieReviewFrom.get('rating');
  }
  //rating = new FormControl('', Validators.required );
  ngOnInit() {
    this.fillInMovieReviewForm();
  }
  fillInMovieReviewForm() {
    this.movieReviewFrom = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      rating: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log('Form data submitted');
    console.log(this.movieReviewFrom.value, {});
    this.movieReviewFrom.reset();
  }

  fillFormWithDynamicValues() {
    this.movieReviewFrom.setValue({
      title: 'new Earth',
      description: 'description goes here',
      rating: 5
    });
  }


  setRatingToFive() {
    this.movieReviewFrom.patchValue({
      rating: 4
    })
  }
}
