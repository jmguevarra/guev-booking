import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import DayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [DayGridPlugin],
    eventClick: this.dateClicked.bind(this),
    events: [
      { title: 'Event 1', start: '2023-07-01' },
      { title: 'Event 2', start: '2023-07-02' }
    ]
  }

  dateClicked(arg: any){
    console.log(arg);
  }
}
