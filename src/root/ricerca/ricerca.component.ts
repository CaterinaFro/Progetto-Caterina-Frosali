import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DbLibriService } from '../db-libri.service';
import { AjaxResponse } from 'rxjs/ajax';
import {Libro} from '../libro';
import {Archivio} from '../archivio';
import {CommonModule} from '@angular/common'
import {VisualizzazioneComponent} from './visualizzazione/visualizzazione.component';
import {NoleggioComponent} from './noleggio/noleggio.component';
import {EliminaComponent} from './elimina/elimina.component';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  imports: [
    CommonModule, VisualizzazioneComponent, NoleggioComponent, EliminaComponent],
  standalone: true,
  providers: [DbLibriService]
})
export class RicercaComponent {
  @Output() sezioneEvent = new EventEmitter<boolean>();
  @Output() cambioview= new EventEmitter<string>();
  //@Output() ricercaEvent = new EventEmitter<string>(); 
  //metodo che emette al componente genitore (root) la stringa immessa nel campo di ricerca
  risultati : Array<Libro> = [];
  vuoto : string = "";
  digitazione : string = "";

  
constructor(private dbls: DbLibriService) { }

  clean() {
    this.sezioneEvent.emit(true);
  }

  unico_risultato () {
    this.cambioview.emit("home");

  }


  ricercalibro() {
    // controllo che se l'input è vuoto l'elenco libri venga svuotato per non mostrarli 
    var cerca: HTMLInputElement = document.getElementById('campo-ricerca') as HTMLInputElement;
    this.digitazione = cerca.value
    if (this.digitazione == "") {
      this.risultati = [];
      return;}
    
    this.dbls.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
      var libriPresenti = JSON.parse(x.response);
      var archivioAttuale: Archivio =  new Archivio(libriPresenti);
      this.risultati = archivioAttuale.libri.filter((libro: Libro) => (libro.titolo+libro.autore).toLowerCase().includes(this.digitazione.toLocaleLowerCase()));

    },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err))
  
  });
  }

}


