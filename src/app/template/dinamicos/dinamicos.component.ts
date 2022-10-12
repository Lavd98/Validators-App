import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favorito: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Luis',
    favorito: [
      {id: 1, nombre: 'Metal'},
      {id: 2, nombre: 'Salsa'},
    ]
  };

  nuevoJuego: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('hola')
  }

  agregar() {
    const nuevoFav: Favorito = {
      id: this.persona.favorito.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favorito.push( {...nuevoFav} );
    this.nuevoJuego = '';
  }

  eliminar(i: number) {
    this.persona.favorito.splice(i, 1)
  }

}
