import { Component, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';

import { UserService } from 'src/app/_services/user.service';
import { PunchService } from 'src/app/_services/punch.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  dates: any = [];

  intervalId: any;
  subscription!: Subscription;
  rxTime = new Date();

  stf: any = [];
  inTime: any;
  outTime: any;

  status: boolean = false;
  punchs: any = [];


  user = 'Chirag';

  constructor(private users: UserService, private punch: PunchService) {
    this.punch.getPunch().subscribe((data: any) => {
      this.punchs = data.data;
      this.inTime = data.data.punchIn
      console.log(this.inTime)
      // this.punchs.push(data.data)
      console.log(this.punchs, 'created_at');
      // this.punchs = data.data
    });
  }

  ngOnInit(): void {
    // this.users.staff().subscribe((resp:any)=>{
    //   this.stf = resp.data.length
    //   console.log(this.stf,"My data");
    // });

    //for Live Clock
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time) => {
        this.rxTime = time;
      });

    //get this month all dates
    // const getAllDaysInMonth = (month: any, year: any) =>
    //   Array.from(
    //     { length: new Date(year, month, 0).getDate() },
    //     (_, i) => new Date(year, month - 1, i + 1)
    //   );

    // var month = (new Date().getMonth() + 1).toString().slice(-2);

    // var year = new Date().getFullYear().toString();
    // // console.log(d)

    // const allDatesInOctober = getAllDaysInMonth(month, year);

    // this.dates = allDatesInOctober;

    // console.log(
    //   allDatesInOctober.map((x) =>
    //     x.toLocaleDateString([], { month: 'short', day: 'numeric' })
    //   )
    // );
    // console.log(this.dates, 'my daya');
  }

  // ngOnDestroy() {
  //   clearInterval(this.intervalId);
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

  punchIn() {
    this.status = !this.status;
    // this.inTime=this.rxTime.toString();
    // console.log(this.inTime,"in time");
    // console.log(this.dates[8],"today date")
    // console.log(this.dates.indexOf((x:any) => x === this.rxTime));
    // var key = localStorage.getItem('session');
    var punch_status = 1;
    var val = {
      // key,
      punch_status,
    };
    this.punch.punchIn(val).subscribe((resp: any) => {
      console.log(resp);
    });
  }

  punchOut() {
    this.status = false;
    // this.outTime=this.rxTime.toString();
    // console.log(this.outTime, "Out Time");
    // var key = localStorage.getItem('session');
    var punch_status = 0;
    var val = {
      // key,
      punch_status,
    };
    this.punch.punchIn(val).subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
