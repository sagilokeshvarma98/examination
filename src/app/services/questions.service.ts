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
  public noOfQuestions:number = 0;

  getNoOfQuestions():Observable<IQuestions[]> {
   return this._HTTP.get<IQuestions[]>(this._URL)
  }

  getQuestions(questionNo:number):Observable<IQuestions[]> {
    return this._HTTP.get<IQuestions[]>(this._URL+`?id=${questionNo}`)
  }
}
