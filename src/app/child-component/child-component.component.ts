import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  @Output() clicked = new EventEmitter<String>();
  ngOnInit(): void {
  }
  onClick(){
    this.clicked.emit("J K Rowling");
  }

}
