import { Component, OnInit } from '@angular/core';
import { TableCompose } from './provider/table/table-compose';
import { DataType } from './provider/table/data-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  tableData:any;
  mockData=[
    {
      name:"ropa",
      surname:"muridzi",
      age:23,
      status:false
    },
    {
      name:"pride",
      surname:"jena",
      age:29,
      status:true
    
    },
    {
      name:"chipo",
      surname:"masamah",
      age:56,
      status:false
    },
    {
      name:"tafadzwa",
      surname:"mazorodze",
      age:35,
      status:true
    },
    {
      name:"rodrick",
      surname:"chinongwa",
      age:60,
      status:false
    }
  ];

  constructor(){}

  ngOnInit() {
    this.tableData = new TableCompose()
    .composeHeader('name', 'Name', DataType.Plain)
    .composeHeader('surname', 'Surname', DataType.Plain)
    .composeHeader('age', 'Age', DataType.Plain)
    .composeHeader('status', 'Attendance', DataType.Check)
     .setBody(this.mockData);
    console.log(this.mockData);
  }

}