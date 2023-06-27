import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone: true
})
export class RicercaComponent implements OnInit {
  @Output() sezioneEvent = new EventEmitter<boolean>();
  //@Output() cleanEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  trovaMatch() { //funzione che emtte l'evento SezioneEvent alla root con parametro = false
    this.sezioneEvent.emit(false)
  }

  clean() {
    this.sezioneEvent.emit(true);
  }

}