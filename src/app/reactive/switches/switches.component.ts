import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  formSwi: FormGroup = this.fb.group({
    genero: [ 'F', Validators.required ],
    notificaciones: [false, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formSwi.reset({...this.persona, condiciones: false})

    this.formSwi.valueChanges.subscribe(({condiciones, ...rest}) => {
      // delete data.condiciones;
      this.persona = rest;
    });

    // this.formSwi.get('condiciones')?.valueChanges.subscribe(data => {
    //   console.log(data)
    // })
  }

  guardar() {
    const formValue = {...this.formSwi.value};
    delete formValue.condiciones;
    this.persona = formValue;
  }

}
