import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {
  rows: any;
  columns : any;
  constructor() {
    this.rows = [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];
    this.columns = [
      { prop: 'name' },
      { name: 'Gender' },
      { name: 'Company' }
    ];
  }

  ngOnInit() {
  }

}
