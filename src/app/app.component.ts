import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  title = 'post';
  count:number=0;
  dataVisibility:boolean=false; 

  likedArray:any[]=[];
tableDisplay(){
  this.dataVisibility=true;
}
  
  display(object:any){
this.likedArray.push(object);
this.count =this.likedArray.length;
console.log(this.count);
}
}
