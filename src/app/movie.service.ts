import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { MovieModel } from './movies/movie.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<MovieModel[]> {
    let moviesUrl = 'assets/jsons/movi1es.json';
    console.log('calling movies service');
    return this.httpClient.get<MovieModel[]>(moviesUrl);
  }

}
