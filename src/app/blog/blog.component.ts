import { Component, OnInit } from '@angular/core';


import { BlogService } from '../_services/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogList: any = [];

  ModalTitle: any;
  ActivateAddEditDepComp: boolean = false;
  blog:any;
  BloglistWothoutfilter: any=[];

  constructor(private blogserv:BlogService) { }

  ngOnInit(): void {
    this.getBlog()
  }

  addClick() {
    this.blog = {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
  }

  getBlog (){
    this.blogserv.getBlog().subscribe((data:any)=>{
      this.blogList = data;
      console.log(this.blogList.data);

    })
  }

  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  refreshDepList() {
    this.blogserv.getBlog().subscribe(data => {
      this.blogList = data;
      this.getBlog();
      this.BloglistWothoutfilter = data;
    });
  }


}
