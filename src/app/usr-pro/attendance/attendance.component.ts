import { Component, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  dates: any = [];

  intervalId:any;
  subscription!: Subscription;
  rxTime = new Date();

  stf:any=[];
  curTime:any;

  
  constructor(private users:UserService) {}

  ngOnInit(): void {

    this.users.staff().subscribe((resp:any)=>{
      this.stf = resp.data.length
      console.log(this.stf,"My data");
    });

    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });

    const getAllDaysInMonth = (month: any, year: any) =>
      Array.from(
        { length: new Date(year, month, 0).getDate() }, 
        (_, i) => new Date(year, month - 1, i + 1),
      );

    var month = (new Date().getMonth() + 1).toString().slice(-2);

    var year = new Date().getFullYear().toString();
    // console.log(d)

    const allDatesInOctober = getAllDaysInMonth(month, year);

    this.dates = allDatesInOctober;

    console.log(
      allDatesInOctober.map((x) =>
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

  punch(){
    this.curTime=this.rxTime.toTimeString();
    console.log(this.curTime)
  }

  
   
  
}
