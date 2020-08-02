import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {tap, first } from 'rxjs/operators'
import { of } from 'rxjs';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  myForm: FormGroup;

  // Form State
  loading = false;
  success = false;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  async submitHandler() {
    // Setting loading state to true
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.mimickDBCall(formValue);
      this.success = true;
    } catch(err) {
      console.log(err);
    }

    // Set loading back to false
    this.loading = false;
  }

  mimickDBCall(formValues) {
    console.log(formValues);

    //wait 2 seconds then return
    
    const dbCallObservable = of('i did it');
    return Promise.resolve(dbCallObservable);
  }
}
