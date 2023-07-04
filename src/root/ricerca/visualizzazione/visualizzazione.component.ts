import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DbLibriService } from '../../db-libri.service';
import { AjaxResponse } from 'rxjs/ajax';
import {Libro} from '../../libro';
import {Archivio} from '../../archivio';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-visualizzazione',
  templateUrl: './visualizzazione.component.html',
  styleUrls: ['./visualizzazione.component.css'],
  standalone: true,
  providers: [DbLibriService],
  imports: [CommonModule]

})
export class VisualizzazioneComponent implements OnInit {

  constructor(private dbls: DbLibriService) { }

  ngOnInit() {
  }

}