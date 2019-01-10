import { Component, OnInit, AfterViewInit, AfterViewChecked} from '@angular/core';
import { Location } from '@angular/common';
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements  AfterViewChecked
 {

  topbarTitle: string;
  topbarClass: string;
  route: string;





  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val) => {
        this.initTopBarClass(location.path());
    });
  }

  ngAfterViewChecked() {
  }

  initTopBarClass = function(url: any) {
    if (url != "/overview") {
      this.topbarTitle= "Aymeric Bouzigues";
      this.topbarClass = 'Regular'
    } else {
      this.topbarTitle= "Overview";
      this.topbarClass = 'Overview'
    }
  }

  adaptTopBar = function(colorClass: string, title: string) {
    this.topbarTitle = title;
    this.topbarClass = colorClass;
  }

}
