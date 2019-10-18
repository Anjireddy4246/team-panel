import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogId: number = 5;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToBlog = () =>{
    console.log('navigate to blog');
    this.router.navigate(['blog', this.blogId],{queryParams:{"author":"ns"}});
  } 

}
