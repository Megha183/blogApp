import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/Main/about.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DetailsComponent } from './components/details/details.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'home',component:HomeComponent},
  // {path:'',component:HomeComponent},
  // {path:'about',component:AboutComponent},
  {path:'addblog',component:AddPostComponent},
  {path:'blogs/:id',component:DetailsComponent },
  {path:'editblog/:id',component:EditPostComponent},
  {path:'deleteblog/:id',component:DeleteComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
