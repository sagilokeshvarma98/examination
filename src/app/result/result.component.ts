import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { reduce } from 'rxjs/operators';
import { IQuestions } from '../interface/question';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public url: ActivatedRoute, private _AS: QuestionsService) { }

  public myAnswers: any;
  public count: number = 0;
  public view: boolean = false;
  mainQes: IQuestions[] = []
  public username: string = ""
  review: string = ""
  ngOnInit(): void {
    this.url.params.subscribe(res => {
      this.username = res.username;
      this._AS.getResultById(res.id).subscribe(res => {
        this.myAnswers = res.myAnswers;
        console.log(this.myAnswers);
        this._AS.getNoOfQuestions().subscribe(res => {
          this.mainQes = res
          this.calculateResult()
        })
      });
    });
  }

  progressStyle: any = {
    backgroundColor: "red",
    width: "0%"
  }

  calculateResult() {
    this.mainQes.filter((x: IQuestions) => {
      if (x.answer == this.myAnswers[`${x.id}`])
        this.count++;
    })
    let percent = (this.count / 9) * 100;
    console.log(percent);
    if (this.count <= 3) {
      if (this.count == 0) {
        this.progressStyle.width = "100%";
      }
      else
        this.progressStyle.width = percent + "%";
      this.review = "LONG WAY TO GO"
    }
    else if (this.count > 3 && this.count <= 7) {
      this.progressStyle.backgroundColor = "orange";
      this.progressStyle.width = percent + "%";
      this.review = "KEEP WORKING HARD"
    }
    else {
      this.progressStyle.backgroundColor = "green";
      this.progressStyle.width = percent + "%";
      this.review = "GOOD WORK"
    }
  }

}
