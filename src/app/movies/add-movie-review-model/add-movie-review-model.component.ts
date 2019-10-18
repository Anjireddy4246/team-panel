import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-movie-review-model',
  templateUrl: './add-movie-review-model.component.html',
  styleUrls: ['./add-movie-review-model.component.css']
})
export class AddMovieReviewModelComponent implements OnInit {
  movieReviewFrom: FormGroup;
  rating = new FormControl('', Validators.required );
  constructor() { }

  ngOnInit() {
    this.fillInMovieReviewForm();
  }
  fillInMovieReviewForm() {
    this.movieReviewFrom = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('desc', [Validators.required, Validators.minLength(10)]),
      rating: this.rating
    });
  }

  onSubmit() {
    console.log('Form data submitted');
    console.log(this.movieReviewFrom.value, {});
    this.movieReviewFrom.reset(); 
  }
}
