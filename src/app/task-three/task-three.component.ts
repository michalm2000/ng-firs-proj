import { Component, OnInit } from '@angular/core';
import {timestamp} from "rxjs";

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent implements OnInit {
  showSecrets = false
  logArray = []

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.showSecrets = !this.showSecrets;
    this.logArray.push(new Date())
  }

}
