import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
