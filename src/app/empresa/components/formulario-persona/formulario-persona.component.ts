import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// modelo
import { Persona } from 'src/app/core/models/persona.model';

// formControl
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

  @Output()
  nuevaPersona = new EventEmitter<Persona>();

  public newPersona: Persona = {
    nombre: '',
    edad: null,
    frase: ''
  };
  // formControl
  form: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  // formControl
  private buildForm(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(30)]],
      edad: ['', [Validators.required,
                  Validators.pattern(/^\d+$/),
                  Validators.min(1),
                  Validators.max(100)]],
      frase: ['', Validators.maxLength(80)],
    });

    // para que sea reactivo
    this.form.valueChanges
    .pipe(
      // tiempo para que no carge en n ms
      debounceTime(500)
    )
    .subscribe(value => {
      // console.log(value);
    });


  }

  save(event: Event): void {
    // cancela el comportamiendo de recargar pg
    event.preventDefault();
    // preguntamos si es valido para poder guardarlo
    if (this.form.valid) {
      // asignamos el valor del formulario a value
      const value = this.form.value;
      // console.log('value', value);
    } else {
      // se marcan todos como tocados para que se marquen lo errores
      this.form.markAllAsTouched();
    }
  }

  // un geter para evitar repetir codigo en las validaciones html
  get nombreField(): any{
    return this.form.get('nombre');
  }
  get nombreFieldIsValid(): any{
    return this.nombreField.touched && this.nombreField.valid;
  }
  get nombreFieldIsInvalid(): any{
    return this.nombreField.touched && this.nombreField.invalid;
  }

  get edadField(): any{
    return this.form.get('edad');
  }
  get edadFieldIsValid(): any{
    return this.edadField.touched && this.edadField.valid;
  }
  get edadFieldIsInvalid(): any{
    return this.edadField.touched && this.edadField.invalid;
  }

  get fraseField(): any{
    return this.form.get('frase');
  }
  get fraseFieldIsValid(): any{
    return this.fraseField.touched && this.fraseField.valid;
  }
  get fraseFieldIsInvalid(): any{
    return this.fraseField.touched && this.fraseField.invalid;
  }

  addNewPersonaHijo(persona: Persona): void{
    if (this.form.valid){
      console.log('newPersona desde del hijo' , persona);
      this.nuevaPersona.emit(persona);
    } else {
      alert('Debes ingreasar los datos correctamente');
    }
  }
}
