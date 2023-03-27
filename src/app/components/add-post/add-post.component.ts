import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  constructor(private blogService:BlogService,private router:Router){}
  addBlog=new FormGroup({
    title:new FormControl('',Validators.required),
    author:new FormControl('',Validators.required),
    content:new FormControl('',Validators.required)
  })

  onSubmit(){
    console.log(this.addBlog.value);
    if(this.addBlog.valid){

    this.blogService.createBlog(this.addBlog.value).subscribe((data)=>{
      alert("Blog post succesful")
      this.addBlog.reset()
      this.router.navigateByUrl("home")
    },(error)=>{
      console.log("error occured! ");
      
    })}
    else{
      alert("Invalid Form")
    }
    
  }

}
