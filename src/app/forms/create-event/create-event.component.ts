import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}
  formCreateEvent = this.formBuilder.group({
    eventTitle: [ '' as string, Validators.required ],
    productName: ['' as string, Validators.required],
    startDate: [ '' as string | null, Validators.required ],
    endDate: [ '' as string | null, Validators.required ],
  });

  ngOnInit(): void {

  }

  submitCreateEvent(event: Event){
    console.log(event);
  }

}
