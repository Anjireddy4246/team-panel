import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  empId: string = "1";
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(x => {
      console.log('param map and access the path parameters' + JSON.stringify(x));
    });

    this.activatedRoute.params.subscribe(x => {
      console.log('param map and access the path parameters' + JSON.stringify(x));
    });
    console.log('access value using the snapshot' + this.activatedRoute.snapshot.params.id);

    this.activatedRoute.queryParams.subscribe(x => {
      console.log('Querystring parameters', x);
    });
  }

  ngOnInit() {
  }

}
