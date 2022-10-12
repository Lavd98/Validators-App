import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  formDinamico: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array([
      ['Metal'], ['Death']
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() { return this.formDinamico.get('favoritos') as FormArray}

  constructor(
  private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  esValido(termino: string) {
    return this.formDinamico.controls[termino].errors && this.formDinamico.controls[termino].touched
  }

  guardar() {
    if(this.formDinamico.invalid){
      this.formDinamico.markAllAsTouched();
      return
    }

    console.log(this.formDinamico.value)
  }

  agregar() {
    if(this.nuevoFavorito.invalid){
      return
    }
    
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required) );
    this.nuevoFavorito.reset();
  }

  eliminar(i: number) {
    this.favoritosArr.removeAt(i)
  }

}
