import { Component } from '@angular/core';
import { IQuestions } from './interface/question';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang08';
  questionNo: number = 1;
  questions: IQuestions[] = [];
  constructor(private _QS: QuestionsService) {
    _QS.getNoOfQuestions().subscribe(res=>this.questions=res)
  }

  public answerArray: string[] = []

  getAnswersArray(obj: any) {
    this.answerArray[obj.answerId] = obj.answer;
    console.log(obj);
    
    console.log(this.answerArray);
  }
}
