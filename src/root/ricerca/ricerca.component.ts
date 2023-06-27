import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone: true
})
export class RicercaComponent implements OnInit {
  @Output() sezioneEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  trovaMatch() { //funzione che emtte l'evento SezioneEvent alla root con parametro = false
    this.sezioneEvent.emit(false)
  }

}