import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit  {

  @Input() pValue;

  @Output() cValue = new EventEmitter();

  childValue = 'This is child value';
  isFavorite = true;

  ngOnInit() {
    // this.cValue.emit(this.childValue);
  }

  senToParent() {
    this.cValue.emit(this.childValue);
  }
  

}
