import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  topbarTitle: string;
  topbarClass: string;




  constructor() {
    this.topbarTitle= "Aymeric Bouzigues";
    this.topbarClass = 'Regular'
  }

  ngOnInit() {
  }

  adaptTopBar = function(colorClass: string, title: string) {
    this.topbarTitle = title;
    this.topbarClass = colorClass;
  }

}
