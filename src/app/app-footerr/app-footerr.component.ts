import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-footerr',
  templateUrl: './app-footerr.component.html',
  styleUrls: ['./app-footerr.component.scss'],
  styles : [`
    .footer{
      color: gray;
      height:25px;
    }
  `]
})
export class AppFooterrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
