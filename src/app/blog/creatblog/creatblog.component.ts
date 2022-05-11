
import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-creatblog',
  templateUrl: './creatblog.component.html',
  styleUrls: ['./creatblog.component.css'],
})
export class CreatblogComponent implements OnInit {
  imageSrc!: string;
  myForm = new FormGroup({
    postTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),

    postImage: new FormControl('', [Validators.required]),

    postDescription: new FormControl('', [Validators.required]),

    fileSource: new FormControl('', [Validators.required]),
  });

  constructor(
    private BlogServ: BlogService,
  ) {}

  get f() {
    return this.myForm.controls;
  }
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [postImage] = event.target.files;

      reader.readAsDataURL(postImage);
      // console.log(postImage.name, "My");

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.myForm.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }

  submit() {
    console.log(this.myForm.value,"My");
    var path = `C:\\fakepath\\${this.myForm.value.postImage}`;
      this.myForm.value.postImage = path.replace(/^.*\\/, "");
      console.log(this.myForm.value.postImage,"fname");
      var formValue = this.myForm.value;
      // console.log(formValue,"my form data");
      var key = localStorage.getItem('session')
      var postDescription = formValue.postDescription
      var postTitle = formValue.postTitle
      var val = {
        // formValue,
        key,
        postDescription,
        postTitle
      }

    this.BlogServ.postBlog(val).subscribe((res)=>{
      console.log(res, "responce" );
      alert('Uploaded Successfully');
    })
  }

  ngOnInit(): void {}
}
