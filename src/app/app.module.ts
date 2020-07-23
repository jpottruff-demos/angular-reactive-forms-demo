import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'


import { AppComponent } from './app.component';
import { ArrayFormComponent } from './components/array-form/array-form.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { NestedFormComponent } from './components/nested-form/nested-form.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';
import { ValidFormComponent } from './components/valid-form/valid-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFormComponent,
    BasicFormComponent,
    NestedFormComponent,
    SubmitFormComponent,
    ValidFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
