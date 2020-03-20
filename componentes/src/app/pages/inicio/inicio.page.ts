import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      RedirectTo: '/action-sheet'
    },
    {
      icon: 'alarm',
      name: 'Alert',
      RedirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      RedirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons',
      RedirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      RedirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'CheckBox',
      RedirectTo: '/check'
    },
    {
      icon: 'time-outline',
      name: 'DateTime',
      RedirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      RedirectTo: '/fab'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  RedirectTo: string;  
}