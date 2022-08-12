import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionModel } from '../../Models/question-model.model';
import { AnswerServiceService } from '../../Service/answer-service.service';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {

  constructor(public ansService: AnswerServiceService) { }

  @Input() question!: QuestionModel<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.id].valid; }
  public questionOb!: QuestionModel<string>;
  ngOnInit(): void {
  }
  onChange(){
    //console.log(this.questionOb)
  }

}
