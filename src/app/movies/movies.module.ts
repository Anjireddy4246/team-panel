import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { RatingComponent } from './rating/rating.component';
import { AddNewMovieComponent } from './add-new-movie/add-new-movie.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMovieReviewModelComponent } from './add-movie-review-model/add-movie-review-model.component';
import { AddMobieReviewFbComponent } from './add-mobie-review-fb/add-mobie-review-fb.component';
import { MovieRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [MovieListComponent,
    MovieComponent,
    RatingComponent,
    AddNewMovieComponent,
    AddMovieReviewModelComponent,
    AddMobieReviewFbComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MovieRoutingModule
  ]
})
export class MoviesModule { }
