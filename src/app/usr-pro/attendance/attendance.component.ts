import { Component, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';
import * as moment from 'moment/moment';

import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  dates: any = [];
  punch = false;

  intervalId: any;
  subscription!: Subscription;
  rxTime = new Date();

  stf: any = [];
  inTime: any;
  outTime: any;
  demo: any;
  demo2: any;
  timeGape: any;

  user = 'Chirag';

  constructor(private users: UserService) {}
  

  ngOnInit(): void {
    this.users.staff().subscribe((resp:any)=>{
      this.stf = resp.data.length
      console.log(this.stf,"My data");
    });
    

    // this.subscription = timer(0, 1000)
    //   .pipe(
    //     map(() => new Date()),
    //     share()
    //   )
    //   .subscribe((time) => {
    //     this.rxTime = time;
    //   });

    const getAllDaysInMonth = (month: any, year: any) =>
      Array.from(
        { length: new Date(year, month, 0).getDate() },
        (_, i) => new Date(year, month - 1, i + 1)
      );

    var month = (new Date().getMonth() + 1).toString().slice(-2);

    var year = new Date().getFullYear().toString();
    // console.log(d)

    const allDates = getAllDaysInMonth(month, year);

    this.dates = allDates;

    console.log(
      allDates.map((x) =>
        x.toLocaleDateString([], { month: 'short', day: 'numeric' })
      )
    );
    console.log(this.dates, 'my daya');
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  punchIn() {
    this.punch = true;
    this.inTime = this.rxTime.toString();
    this.demo = this.rxTime.toDateString();
    this.demo2 = this.dates[9].toDateString();
    if (this.inTime == this.demo) {
      console.log(this.inTime, 'in time chack status ok');
      console.log(this.dates[9].toDateString(), 'today date Chack status ok');
    }
    console.log(this.inTime, 'in time chack');
    // console.log(this.dates[9].toString(), 'today date Chack');
    // console.log(this.dates.indexOf((x:any) => x === this.rxTime)); 
  }

  punchOut() {
    this.punch = false;
    this.outTime = this.rxTime.toString();
    console.log(this.outTime, 'Out Time');
  }

}
