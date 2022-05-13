import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../_services/feedback.service';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {

  myform = new FormGroup({
    feedback : new FormControl('',[Validators.required]),
  })

  constructor( private msgServ : FeedbackService ) { }

  ngOnInit(): void {
  }
  
  onFeedback(){
    var formValue = this.myform.value;
    var feedback = formValue.feedback
    var key = localStorage.getItem('session')
    var val = {
      key,
      feedback
    }
    this.msgServ.postFeedback(val).subscribe((resp)=>{
      console.log(resp,"messave feed back");
      alert('Send successfully');
    });
  }

}
