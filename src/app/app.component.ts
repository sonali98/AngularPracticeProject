import { Component } from '@angular/core';
import { Series } from './series';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  series = [
    new Series(1, 'Harry Potter and the philosophers stone'),
    new Series(2, 'Harry Potter and chamber of secrets'),
    new Series(3, 'Harry Potter and the prisoner of azkaban'),
    new Series(4, 'Harry Potter and goblet of fire'),
    new Series(5, 'Harry Potter and the order of phoenix'),
    new Series(6, 'Harry Potter and half-blood prince'),
    new Series(7, 'Harry Potter and the deathly hollows part 1'),
    new Series(8, 'Harry Potter and the deathly hollows part 2')
  ];
  msg:String;
  id = 0;
  childMsg = "";
  isShow = false;
  public name = "";
  color:string;
  
  
  seriesName:any;
  showName(event){

    this.id = event.target.value;
    this.seriesName = this.series[this.id-1];
  }

  onClicked(value){
    this.childMsg = value;
  }
  emailid="";
  getEmail(value){
    this.emailid = value;
  }

  upperName="";
  onEnter(value){
    this.upperName = value;
  }
}

