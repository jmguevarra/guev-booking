import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyAccountRoutingModule } from "./my-account-routing.module";
import { FullCalendarModule } from '@fullcalendar/angular';

import { CreateEventComponent } from "./create-event/create-event.component";
import { CalendarComponent } from "./calendar/calendar.component";


@NgModule({
    declarations: [
        CreateEventComponent,
        CalendarComponent
    ],
    imports: [
        CommonModule,
        MyAccountRoutingModule,
        FullCalendarModule
    ],
    providers: []
})

export class MyAccountModule{}