import { Component, OnInit } from '@angular/core';

import { FeedbackService } from 'src/app/_services/feedback.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
  messages : any =[];

  constructor( private feedMsg : FeedbackService ) { 
    this.feedMsg.getFeedback().subscribe((resp:any)=>{
      console.log(resp.data,"my responce");
      this.messages = resp.data
    });
  }

  ngOnInit(): void {
  }

}
