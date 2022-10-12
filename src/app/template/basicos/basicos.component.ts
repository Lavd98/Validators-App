import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    stock: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.form.controls['producto']?.invalid && this.miFormulario?.form.controls['producto']?.touched
  }

  precioValido(): boolean {
    return  this.miFormulario?.form.controls['producto']?.invalid &&this.miFormulario?.form.controls['precio']?.touched &&  this.miFormulario?.form.controls['precio']?.value < 0;
  }

  guardar() {
    console.log('Poste correcto');
    this.miFormulario.resetForm({
      precio: 0,
      stock: 0
    });
  }
}
