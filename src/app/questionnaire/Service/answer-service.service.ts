import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnswerModel } from '../Models/answer-model.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerServiceService {

  public flag:boolean = true;
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  public ansList: AnswerModel = new AnswerModel();
  postAnswer(){
    this.http.post("http://localhost:3000/answers", this.ansList).subscribe(res => {
      console.log(this.ansList.id);
      console.log("answers are recorded successfully");
      if(this.flag){
        this.toastr.success("Submitted successfully.", "Online Store");
      }
      
    }, err => {
      console.log("error in posting answers");
      this.toastr.error("Forn not submitted.", "Online Store")
    })
  }

}
