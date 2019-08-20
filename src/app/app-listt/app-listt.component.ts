import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-app-listt',
  templateUrl: './app-listt.component.html',
  styleUrls: ['./app-listt.component.scss']
})
export class AppListtComponent implements OnInit {

  fullImagePath: string;

  constructor() {
    this.fullImagePath = 'assets/img/download.jpg'
  }

  ngOnInit() {
  }

  

  //   constructor() {
  
  //   }
  //  ngOnInit() {
  // }
}
