import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {
  menu :any;
  constructor(private router: Router) {
    this.menu = [
      {'title':'Home','link':'dashboard','icon':'fa-home'},
      {'title':'Accounts','link':'accounts','icon':'fa-bank'},
      {'title':'Sites','link':'sites','icon':'fa-map'},
      {'title':'Assets','link':'assets','icon':'fa-cubes'},
      {'title':'Tickets','link':'tickets','icon':'fa-ticket'},
      {'title':'Dispatch','link':'dispatch','icon':'fa-map-signs'},
      {'title':'Schedule','link':'schedule','icon':'fa-bars'},
      {'title':'Branches','link':'branches','icon':'fa-industry'},
      {'title':'Inventory','link':'inventory','icon':'fa-tag'},
      {'title':'Accounting','link':'accounting','icon':'fa-file'},
      {'title':'Reports','link':'reports','icon':' fa-area-chart'},
    ];
  }

  ngOnInit() {
  }

  menuitem(link)
  {
    this.router.navigate( [link] );
  }

}
