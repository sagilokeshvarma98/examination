import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuestions } from '../interface/question';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  questionNo: number = 1;
  questions: IQuestions[] = [];
  username: string = ""
  constructor(private _QS: QuestionsService, public route:Router, public par:ActivatedRoute) {
    _QS.getNoOfQuestions().subscribe(res=>this.questions=res)
    par.params.subscribe(res=> this.username = res.username)
  }

  public answerObject: string[] = []

  getAnswersArray(obj:any) {
    this.answerObject = obj
  }

  postResult(){
    this._QS.postResult(this.answerObject).subscribe(res=>{
      this.route.navigate(['result/'+this.username+"/"+res.id])
    });
  }

}
