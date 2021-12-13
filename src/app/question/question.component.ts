import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { IQuestions } from '../interface/question';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges {

  constructor(public QS: QuestionsService) {
  }

  @Input() questionNo:number = 1;
  @Output() answers:EventEmitter<any> = new EventEmitter<any>()
  public question:IQuestions | undefined;

  ngOnChanges(): void {    
    this.QS.getQuestions(this.questionNo).subscribe(res=>this.question = res[0]);
  }

  tset:string[] = ["1"]

  public radioAnswers:any[] = []

  // getAnswer(id:number, answer:any) {
  //   this.radioAnswers[id-1] = answer
  //   console.log(this.radioAnswers);
    
    // let obj = {
    //   answerId: id-1,
    //   answer: answer-1
    // }
    // this.answers.emit(obj)
  // }

  getAnswer(test:any) {
    console.log(test.target.value);
    
  }

}
