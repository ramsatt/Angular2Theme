import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  data: any;
  temp:any;
  rows:any;
  columns:any;
  constructor(private router: Router) {
    this.rows = [
      { id: '1', account: 'MCM Corporation', state: 'Texas', zip:'600024', description:'hello' },
      { id: '2', account: 'Naethra', state: 'New york', zip:'600024', description:'hello' },
      { id: '3', account: 'MCM Corporation', state: 'Tamil Nadu', zip:'600024', description:'hello' },
      { id: '4', account: 'Test', state: 'Mumbai', zip:'600024', description:'hello' },
      { id: '5', account: 'ACC', state: 'Asas', zip:'600024', description:'hello' },
      { id: '6', account: 'MaTCSle', state: 'Swimlane', zip:'600024', description:'hello' },
    ];
    this.columns = [
      { prop: 'id' },
      { name: 'Account' },
      { name: 'State' },
      { name: 'Zip' },
      { name: 'Description' }
    ];
  }

  ngOnInit() {
  }

  openaccount(id)
  {
    this.router.navigate( ['overview'] );
  }



}
