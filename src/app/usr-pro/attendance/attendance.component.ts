import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  dates: any=[]
  constructor() {}

  ngOnInit(): void {
    const getAllDaysInMonth = (month: any, year: any) =>
      Array.from(
        { length: new Date(year, month, 0).getDate() }, // get next month, zeroth's (previous) day
        (_, i) => new Date(year, month - 1, i + 1) // get current month (0 based index)
      );

      var month =
      (new Date().getMonth() + 1).toString().slice(-2);

      var year =
      new Date().getFullYear().toString();
      // console.log(d)


    const allDatesInOctober = getAllDaysInMonth(month, year);

    this.dates = allDatesInOctober

    console.log(
      allDatesInOctober.map((x) =>
        x.toLocaleDateString([], { month: 'short', day: 'numeric' })
      )
    );
    console.log(this.dates,'my daya');
  }
}
