import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  myForm: FormGroup

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      message: 'optional default message',
      career: ''
    })

    // NOTE: valueChanges built into FormGroup (gives an observable; RxJS under the hood)
    this.myForm.valueChanges.subscribe();
  }

}
