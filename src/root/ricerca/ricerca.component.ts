import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {CommonModule} from '@angular/common'
import { DbLibriService } from '../db-libri.service';
import { AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  imports: [
    CommonModule],
  standalone: true,
  providers: [DbLibriService]
})
export class RicercaComponent implements OnInit {
  @Output() sezioneEvent = new EventEmitter<boolean>();
  //@Output() cleanEvent: EventEmitter<void> = new EventEmitter<void>();

  @Output() ricercaEvent = new EventEmitter<string>(); 
  //metodo che emette al componente genitore (root) la stringa immessa nel campo di ricerca
  ricercalibro() {
    var cerca: HTMLInputElement = document.getElementById('campo-ricerca') as HTMLInputElement;
    var searchstring: string = cerca.value;
    this.ricercaEvent.emit(searchstring);

}


constructor(private dbls: DbLibriService) { }

  ngOnInit() {
  }

  clean() {
    this.sezioneEvent.emit(true);
  }

}