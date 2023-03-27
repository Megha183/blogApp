import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  blogid:any
  constructor(private blogService:BlogService,private ar:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.blogid=data["id"]
      console.log(this.blogid);
      
    })
    this.blogService.deleteBlog(this.blogid).subscribe((item:any)=>{
      alert("Blog has been deleted")
      this.router.navigateByUrl("home")
    })
  }
}
