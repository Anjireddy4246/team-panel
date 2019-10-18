import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieModel } from '../movie.interface';

@Component({
  selector: 'add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.css']
})
export class AddNewMovieComponent implements OnInit {

  @Output() movieCreated = new EventEmitter<MovieModel>();

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  createMovieReview(title:string, desc:string, rating:number) {
    console.log('Click event emitted');
    this.movieCreated.emit({
      title: title,
      description: desc,
      hideDesc: true,
      rating: rating
    });
  }

}
