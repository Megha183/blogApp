import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/Main/about.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { DetailsComponent } from './components/details/details.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './components/delete/delete.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddPostComponent,
    HomeComponent,
    HeaderComponent,
    EditPostComponent,
    DetailsComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
