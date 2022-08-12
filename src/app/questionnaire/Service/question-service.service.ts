import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { QuestionModel } from '../Models/question-model.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient) { }
  toFormGroup(questions: QuestionModel<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.id] = question.required ? new FormControl("", Validators.required)  : new FormControl("");
    });
    return new FormGroup(group);
  }
  getQuestions(){
    return this.http.get('http://localhost:3000/questions') as Observable<QuestionModel<string>[]>
  }
}
