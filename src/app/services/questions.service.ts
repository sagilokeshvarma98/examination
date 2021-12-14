import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IQuestions } from '../interface/question';
import { filter, ignoreElements } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private _HTTP: HttpClient) { }

  private _URL: string = "http://localhost:3000/Questions";
  private _UR1: string = "http://localhost:5000/result/"
  public noOfQuestions: number = 0;

  getNoOfQuestions(): Observable<IQuestions[]> {
    return this._HTTP.get<IQuestions[]>(this._URL)
  }

  getQuestions(questionNo: number): Observable<IQuestions[]> {
    return this._HTTP.get<IQuestions[]>(this._URL + `?id=${questionNo}`)
  }

  postResult(answers:any):Observable<any> {
    return this._HTTP.post(this._UR1,{"myAnswers": answers});
  }

  getDefaultAnswers():Observable<any> {
    return this._HTTP.get<any>("http://localhost:3000/answers")
  }

  getResultById(id:number):Observable<any> {
    return this._HTTP.get<any>(this._UR1+id)
  }

}
