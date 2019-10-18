import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rating',
  template: "<span>{{rate}}</span>"
})
export class RatingComponent implements OnInit {
  @Input() rate: number;
  constructor() { }

  ngOnInit() {
    console.log('Log message ->' + this.rate)
  }

}
