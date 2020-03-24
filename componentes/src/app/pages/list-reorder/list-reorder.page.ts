import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  heroes = ['Airon Man', 'Capitan america', 'Hulk', 'Thor', 'Arow', 'BlackWidow'];
  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    const itemMover = this.heroes.splice(event.detail.from, 1)[0];
    this.heroes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }

  onClick(){
    console.log(this.heroes);
  }

}
