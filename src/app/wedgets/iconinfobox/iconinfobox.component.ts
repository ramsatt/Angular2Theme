import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iconinfobox',
  templateUrl: './iconinfobox.component.html',
  styleUrls: ['./iconinfobox.component.css']
})
export class IconinfoboxComponent implements OnInit {
  @Input() title;
  @Input() count;
  @Input() bgcolor;
  @Input() icon;
  constructor() { }

  ngOnInit() {
  }

}
