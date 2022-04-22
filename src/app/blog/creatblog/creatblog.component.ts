import { Component, OnInit, Input } from '@angular/core';

import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-creatblog',
  templateUrl: './creatblog.component.html',
  styleUrls: ['./creatblog.component.css']
})
export class CreatblogComponent implements OnInit {

  constructor(private BlogServ : BlogService) { }

  @Input() blog:any;
  postTitle : any;
  postImage : any;
  postDescription : any;


  ngOnInit(): void {
    this.postTitle = this.blog.postTitle;
    this.postImage = this.blog.postImage;
    this.postDescription = this.blog.postDescription;
  }

}
