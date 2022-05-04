import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  post:any[]=[{key:"1",PostName:"Animal",PostDescription:"The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera.",PostedDate:"2022-06-02",PostedImage:"src/assets/animal.jpg"},{key:"2",PostName:"City",PostDescription:"paris is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019",PostedDate:"2022-06-02",PostedImage:"../assets/paris.jpg"},{key:"3",PostName:"Forest",PostDescription:"forest is a complex ecological system in which trees are the dominant life-form.",PostedDate:"2022-06-02",PostedImage:"../assets/forest.jpg"}]
  constructor() { }
  @Output() notifyme = new EventEmitter<any>();
liked(key:string){
this.post.map((item)=>{
if(item.key==key){

  this.notifyme.emit(item);
}
})
}
  ngOnInit(): void {
  }

}