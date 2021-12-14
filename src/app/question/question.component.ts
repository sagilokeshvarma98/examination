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

  public testAnswers:any = {}
  
  getAnswer(test:any,id:number) {
    this.testAnswers[id] = test.target.value;
    console.log(this.testAnswers);
    this.answers.emit(this.testAnswers)
  }

}
