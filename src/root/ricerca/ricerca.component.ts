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
  //@Output() ricercaEvent = new EventEmitter<string>(); 
  //metodo che emette al componente genitore (root) la stringa immessa nel campo di ricerca
  risultati : Array<Libro> = [];
  vuoto : string = "";
  
constructor(private dbls: DbLibriService) { }

  clean() {
    this.sezioneEvent.emit(true);
  }


  ricercalibro() {
    // controllo che se l'input è vuoto l'elenco libri venga svuotato per non mostrarli 
    var cerca: HTMLInputElement = document.getElementById('campo-ricerca') as HTMLInputElement;
    let digitazione = cerca.value
    if (digitazione == "") {
      this.risultati = [];
      return;}
    
    this.dbls.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
      var libriPresenti = JSON.parse(x.response);
      var archivioAttuale: Archivio =  new Archivio(libriPresenti);
      this.risultati = archivioAttuale.libri.filter((libro: Libro) => (libro.titolo+libro.autore).toLowerCase().includes(digitazione.toLocaleLowerCase()));
      if (this.risultati.length == 0) {
        this.vuoto = 'Nessun risultato trovato.';
        return;}

    },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err))
  
  });
  }

}


