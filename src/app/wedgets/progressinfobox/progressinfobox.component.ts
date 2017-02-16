import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressinfobox',
  templateUrl: './progressinfobox.component.html',
  styleUrls: ['./progressinfobox.component.css']
})
export class ProgressinfoboxComponent implements OnInit {
  @Input() title;
  @Input() color;
  @Input() icon;
  @Input() count;
  @Input() percent;
  @Input() days;


  constructor() { }

  ngOnInit() {
  }

}
