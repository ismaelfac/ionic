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
    console.log('reorder', event);
  }

}
