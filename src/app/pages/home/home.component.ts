import {Component, OnInit} from '@angular/core';
declare var $ : any;
declare var toastr : any;
@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    $('.top-content').backstretch('assets/backgrounds/1.jpg');
    $('footer').backstretch('assets/backgrounds/1.jpg');
  }
  AfterViewInit() {}
}
