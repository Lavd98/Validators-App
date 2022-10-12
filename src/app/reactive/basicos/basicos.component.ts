import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // formBasico: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX'),
  //   'precio': new FormControl(0),
  //   'stock': new FormControl(5),
  // })

  formBasico: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ] ],
    precio: [ , [ Validators.required, Validators.min(0) ] ],
    stock: [ , [ Validators.required, Validators.min(0) ] ]
  })
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  campoValido(campo: string) {
    return this.formBasico.controls[campo].errors && this.formBasico.controls[campo].touched
  }

  guardar() {
    if (this.formBasico.invalid){
      this.formBasico.markAllAsTouched();
      return;
    }
    console.log(this.formBasico.value);
    this.formBasico.reset();
  }

}
