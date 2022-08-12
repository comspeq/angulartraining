import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { FormQuestionComponent } from './stepper-form/form-question/form-question.component';

import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuestionnaireComponent,
    StepperFormComponent,
    FormQuestionComponent,
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    MatNativeDateModule,
    MatRadioModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class QuestionnaireModule { }
