import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { MovieModel } from '../movie.interface';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieModel;
  @ContentChild(RatingComponent, { static: false }) ratingComponent: RatingComponent;
  constructor() { }

  ngOnInit() {
    let movie123 = {
      title: 'Sweet home',
      description: 'nice movie',
      rating: 4,
      hideDesc: true
    } as MovieModel;
    console.log(movie123,{});
  }

  ngAfterContentInit() {
    console.log('rating in the content ' + this.ratingComponent.rate);
  }

  toogle(mov) {
    mov.hideDesc = !mov.hideDesc;
  }

}
