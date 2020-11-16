import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { E404Component } from './e404/e404.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog'},
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: FormComponent },
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
