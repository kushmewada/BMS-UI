import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-creatblog',
  templateUrl: './creatblog.component.html',
  styleUrls: ['./creatblog.component.css']
})
export class CreatblogComponent implements OnInit {
  submit = false;
  formGrp: FormGroup = new FormGroup({});

  // postTitle:any;
  // postDescription:any;


  constructor(private BlogServ : BlogService, private fb: FormBuilder) { 
    this.formGrp = this.fb.group(
      {
        postTitle: ['',[Validators.required]],
        postDescription: ['',[Validators.required]],
        // postImage:['',[Validators.required]]
      }
    );
  }

  get f() {
    return this.formGrp.controls;
  }

  ngOnInit(): void { }

  // blogs : any = [];

  uploadBlog(){
    this.submit=true
    if(this.formGrp.invalid){
      return
    }
    var val = {
      ...this.formGrp.value,
    }
    this.BlogServ.postBlog(val).subscribe(res =>{
      alert(res.toString());
    })
  }

}