import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'addNgBootstrap';


  model: NgbDateStruct;
  date: { year: number; month: number };

  constructor() {
    this.date = { year: 2022, month: 9 }
    this.model = { year: 2022, month: 9, day: 1 }

  }
}
