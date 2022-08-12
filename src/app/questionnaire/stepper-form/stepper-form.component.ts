import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionModel } from '../Models/question-model.model';
import { AnswerServiceService } from '../Service/answer-service.service';
import { QuestionServiceService } from '../Service/question-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css']
})
export class StepperFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private qservice: QuestionServiceService,
    private aservice: AnswerServiceService,private route:Router,private toast:ToastrService) { }

    form!: FormGroup;
    public QuestionArray!: QuestionModel<string>[];
  ngOnInit(): void {
    this.qservice.getQuestions().subscribe(res => {
      this.QuestionArray = res;
      this.form = this.qservice.toFormGroup(this.QuestionArray);
  });
  }
  onSubmit(){
    Object.keys(this.form.value).forEach(key => {
      var ob = {questionId: key, answer: this.form.value[key]};
      this.aservice.ansList.response.push(ob)
    })
    console.log(this.aservice.ansList)
    this.aservice.postAnswer();
    this.form.reset();
    this.route.navigate(['/viewOrder']);
    // this.toast.success('Thank You For Yor Review');
  }
skip()
{
  this.aservice.flag=false;
  this.route.navigate(['/viewOrder']);
}
}
