import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

import { BlogService } from '../_services/blog.service';
import { Blog } from '../_models/blog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  
  MyEmp: Blog[] = [];
  items!: FormArray;

  blogList: any = [];
  comments: any = [];
  blogId: any = [];

  ModalTitle: any;
  ActivateAddEditDepComp: boolean = false;
  blog: any;
  BloglistWothoutfilter: any = [];

  constructor(
    private blogserv: BlogService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.blogserv.getBlog().subscribe((resp: any) => {
      // console.log(resp, 'resp'); 
      this.blogList = resp.data.blogs_detail;
      // this.blogImag = []
      // this.blogImag.push(resp.data.blogs_detail)
      // dataArrayconsole.log(JSON.stringify(data1, null , 2));
      // this.blogList =resp.data.blogs_detail;
      
      console.log(this.blogList, 'blogList');
      localStorage.setItem('blogId', this.blogId);
    });
  }

  createBlog() {
    this.router.navigate(['creatBlog']);
  }
}
