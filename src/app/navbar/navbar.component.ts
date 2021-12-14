import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public min: number = 2;
  public sec: number = 0;
  @Input() username: string = ""
  public runningOut = {
    color:"black"
  }
  @Output() timeUp:EventEmitter<any> = new EventEmitter<any>()

  ngOnInit(): void {
    let count = 0;
    let y = setInterval(() => {
      if (this.sec == 0) {
        this.sec = 59;
        this.min = this.min - 1;
      }
      else
        this.sec = this.sec - 1;
      if (this.min == 0 && count == 0)
      {
        this.runningOut['color'] = "red"
        count++
      }
      if (count > 0 && this.sec == 0) {
        clearInterval(y);
        this.min = 0;
        this.sec = 0;
        this.timeUp.emit()
      }
    }, 1000)
  }

}
