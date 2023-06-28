import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbLibriService } from '../db-libri.service';
import { AjaxResponse } from 'rxjs/ajax';
import {Libro} from '../libro';
import {Archivio} from '../archivio';
import {CommonModule} from '@angular/common'


@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  imports: [CommonModule],
  standalone: true,
  providers: [DbLibriService]
})
export class InserimentoComponent implements OnInit {
  @Output() sezioneEvent = new EventEmitter<boolean>();
  @Output() nuovoLibroEvent = new EventEmitter<Libro>(); 

  constructor(private dbls: DbLibriService) { } 

  ngOnInit() {
  }

  clean() {
    this.sezioneEvent.emit(true);
  }

}