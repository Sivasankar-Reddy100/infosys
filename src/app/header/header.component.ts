import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public plans = ['50','100','500','1000']
  constructor() { }

  ngOnInit(): void {
  }
  
  

}
