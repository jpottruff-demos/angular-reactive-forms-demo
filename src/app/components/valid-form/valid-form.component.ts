import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {
  myForm: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    // NOTE: using buildt in 'synchronous' validators
    // You could pass in asynchronous validators after the Validators array

    this.myForm = this.fb.group({
      email: ['', [
            Validators.required,
            Validators.email
      ]],
      password: ['',[
        Validators.required,
        // At least one letter and one number
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      age: [null, [
        Validators.required,
        Validators.min(18),
        Validators.max(65)
      ]],
      agree: [false, [
        Validators.requiredTrue,
      ]]
    });
  }

  // Getters

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

  get agree() {
    return this.myForm.get('agree');
  }
}
