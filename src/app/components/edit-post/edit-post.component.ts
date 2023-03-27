import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  blogid:any
  blogdata:any
  constructor(private ar:ActivatedRoute,private blogService:BlogService,private router:Router){}

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.blogid=data["id"]
      console.log(this.blogid);
      
    })
    this.blogService.getBlogbyId(this.blogid).subscribe((data:any)=>{
      this.blogdata=data
      console.log(this.blogdata);
      
    })
  }
  updateBlog(form:any){
    console.log(this.blogdata);
    this.blogService.updateBlog(this.blogid,this.blogdata).subscribe((item:any)=>{
      alert("updated")
      this.router.navigateByUrl("home")
      
    })
    
  }

}
