import { Component, OnInit } from '@angular/core';
import { NoleggioComponent } from './noleggio/noleggio.component';
import {RicercaComponent} from './ricerca/ricerca.component';
import {InserimentoComponent} from './inserimento/inserimento.component';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [RicercaComponent, CommonModule, InserimentoComponent]
})
export class RootComponent implements OnInit {
  view: string = 'home';
  sez: boolean = true;
  constructor() { }


  ngOnInit() {

  }

  ricerca() {
    this.view = 'ricerca';
    
  }

  inserimento() {
    this.view = 'inserimento';

  }

  cambiaSez(x:boolean) {
    this.sez = x;
  }

  handleCleanEvent(x:boolean) {
    this.view = 'home'; 
    this.sez = x; 
  }

 
}