import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Series } from '../series';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  imgurl = "assets/images/sonali.jpeg";
  imgurl2 = "assets/images/potter.jpg";
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
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

  isShow = true;
  isShowTitle = false;
  public name = "";

  id=0;
  seriesName:any;
  showName(event){
    this.id = event.target.value;
    this.seriesName = this.series[this.id-1];
  }

  childMsg = "";
  onClicked(value){
    this.childMsg = value;
  }

}
