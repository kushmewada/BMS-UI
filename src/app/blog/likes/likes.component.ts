import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from 'src/app/_models/blog.model';

import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
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
      this.blogId = this.blogList.map((a:any)=>a.blog_id)
      // dataArrayconsole.log(JSON.stringify(data1, null , 2));
      // this.blogList =resp.data.blogs_detail;
      console.log(this.blogId, 'dataArray');
      console.log(this.blogList, 'blogList');
      // localStorage.setItem('blogId', this.blogId);
    });
  }

}
