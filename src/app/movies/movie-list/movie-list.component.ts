import { Component, OnInit, ViewChild, QueryList, ViewChildren, ElementRef, ChangeDetectorRef, ContentChild } from '@angular/core';
import { MovieModel } from '../movie.interface';
import { MovieComponent } from '../movie/movie.component';
import { RatingComponent } from '../rating/rating.component';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: MovieModel[];

  @ViewChild(MovieComponent, { static: false }) movieChild: MovieComponent;
  @ViewChildren(MovieComponent) movieChildrens: QueryList<MovieComponent>;
  @ViewChild("myfavMovie", { static: false }) element: ElementRef;
  constructor(private cd: ChangeDetectorRef, private movieService: MovieService) {
  }

  ngOnInit() {
    this.fillInMovies();
    console.log("ngOnInit");
    console.log("Ng Oninit", this.movieChild);
    this.movieService.getAll().subscribe(x=>{
      console.log('result from API'+ JSON.stringify(x));
    });
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log("ngAfterViewInit Oninit", this.movieChild);
    console.log("ngAfterViewInit Oninit", this.movieChildrens.forEach(x => {
      console.log(x);
    }));
    this.element.nativeElement.value = "final Destimation";

  }

  ngAfterContentInit() {
    // this.element.nativeElement.value = "final Destimation";

  }

  toogle(mov) {
    mov.hideDesc = !mov.hideDesc;
  }

  addMoviereview($event) {
    console.log('event receied');
    console.log($event);
    this.movies.unshift($event);
  }

  fillInMovies() {
    this.movies = [{
      title: 'Devils home',
      description: 'nice movie',
      rating: 5,
      hideDesc: true
    },
    {
      title: 'Sweet home',
      description: 'nice movie',
      rating: 4,
      hideDesc: true
    },
    {
      title: 'Dummy home',
      description: 'nice movie',
      rating: 4,
      hideDesc: true
    }]
  }
  // ngOnChanges() {
  //   console.log(`ngOnChanges`);

  // }

  // ngDoCheck() {
  //   console.log("ngDoCheck");
  // }
  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }
  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }
  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }
  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }
  // ngOnDestroy() {
  //   console.log("ngOnDestroy");
  // }
}
