import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DbLibriService } from '../db-libri.service';
import { AjaxResponse } from 'rxjs/ajax';
import {Libro} from '../libro';
import {Archivio} from '../archivio';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  imports: [
    CommonModule],
  standalone: true,
  providers: [DbLibriService]
})
export class RicercaComponent {
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

  clean() {
    this.sezioneEvent.emit(true);
  }

}

searchbook(searchedstring: string){
  this.ls.getLibrary().subscribe({
    next: (x: AjaxResponse<any>) => {
      this.booksfound = [];
      var booklist = JSON.parse(x.response);
      this.library.adapt(booklist);
      if(searchedstring!=""){
        this.booksfound = this.library.books.filter((book) => (book.titolo.toLowerCase()+book.autore.toLocaleLowerCase()).includes(searchedstring.toLocaleLowerCase())); 
        this.bf_count = this.booksfound.length;
        this.msgFound(this.bf_count);
      } else {
        this.bf_message = "";
      } },
      error: (err) =>
      console.error('La richiesta ha dato un errore: ' + JSON.stringify(err)),
    });
  }