import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

 blogs!:any
constructor(private blogService:BlogService){}

ngOnInit(): void {
  this.blogService.getAllBlogs().subscribe((data)=>{
  this.blogs=data
  },(error)=>{
    console.warn('some error occured ! ')
  })
}
}
