import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone: true
})
export class InserimentoComponent implements OnInit {
  @Output() sezioneEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  clean() {
    this.sezioneEvent.emit(true);
  }

}