import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../shared/validators/validator.service';
import { EmailValidatorService } from '../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formReg: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.pattern(this.validatorService.nombreApellido)] ],
    email: [ , [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService] ],
    username: [ , [Validators.required, this.validatorService.noPuedeserLavd ] ],
    password: [ , [Validators.required, Validators.minLength(6)] ],
    password2: [ , [Validators.required] ],
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password2') ]
  });


  get emailErrorMsg(): string { 
    const errors = this.formReg.get('email')?.errors;
    if( errors?.['required']) {
      return 'El email es obligatorio';
    } else if ( errors?.['pattern']) {
      return 'El valor ingresado no tiene formato de correo';
    } else if (errors?.['emailTomado']) {
      return 'El email ya fue tomado';
    }

    return ''
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidatorService: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.formReg.reset({
      nombre: 'Luis Valenzuela',
      email: 'lucho98.lavd@gmail.com',
      username: 'lavd98',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(termino: string) {
    return this.formReg.get(termino)?.invalid && this.formReg.get(termino)?.touched
  }



  submitForm() {
    console.log(this.formReg.value);
    this.formReg.markAllAsTouched();
  }

}
