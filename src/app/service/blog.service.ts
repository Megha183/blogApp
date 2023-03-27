import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = "http://localhost:3000/blogs"

  constructor(private http: HttpClient) { }

  //get all data

  getAllBlogs() {
    return this.http.get(this.baseUrl)
  }
  //create blog
  createBlog(data: any) {
    return this.http.post(this.baseUrl, data)
  }
  //get data by id
  getBlogbyId(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  //update blogs

  updateBlog(id: any, blogdata: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, blogdata);
  }
  //delete blog if u needed
  deleteBlog(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}

