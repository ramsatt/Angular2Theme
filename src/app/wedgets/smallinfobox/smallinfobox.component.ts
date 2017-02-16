import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smallinfobox',
  templateUrl: './smallinfobox.component.html',
  styleUrls: ['./smallinfobox.component.css']
})
export class SmallinfoboxComponent implements OnInit {
  @Input() title;
  @Input() count;
  @Input() color;
  @Input() icon;
  constructor() { }

  ngOnInit() {
  }

}
