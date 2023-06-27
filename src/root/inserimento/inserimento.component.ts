import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbLibriService } from '../db-libri.service';
import { AjaxResponse } from 'rxjs/ajax';
import {Libro} from '../libro';
import {Archivio} from '../archivio';

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