import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';

const routes: Routes = [
  { path: 'q', component: QuestionnaireComponent },
  { path:'questionnaire',component:StepperFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
