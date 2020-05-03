import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shops-module-header',
  templateUrl: './shops-module-header.component.html',
  styleUrls: ['./shops-module-header.component.css']
})
export class ShopsModuleHeaderComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    console.log(this.imageUrl);
    
  }

}
