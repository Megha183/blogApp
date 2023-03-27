import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  public id!:any;
   public blog:any;
  constructor(private actRoute:ActivatedRoute,private blogService :BlogService){
    this.id=this.actRoute.snapshot.paramMap.get('id')
    console.log(this.id);
    

  }
  ngOnInit(): void {
    this.blogService.getBlogbyId(this.id).subscribe(data=>{
      this.blog=data
      console.log(this.blog);
      
    },(error)=>{
      console.warn("Blog does not exist!");
      
    })
  }

}
