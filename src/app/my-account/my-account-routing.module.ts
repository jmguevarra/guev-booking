import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { CreateEventComponent } from "./create-event/create-event.component";

const routes: Routes = [
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: 'create-event',
        component: CreateEventComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyAccountRoutingModule { }