import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: '', component: WelcomeComponent,
    children: [{
      path: 'movies', loadChildren: () => import("./movies/movies.module").then(m => m.MoviesModule)
    }]
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'blog', component: BlogComponent, children: [
      { path: ':id', component: BlogDetailComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
