import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// modelo
import { Persona } from 'src/app/core/models/persona.model';

// servico
import { PersonaServiceService } from './../../../core/services/persona-service.service';

// formControl
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tarjeta-presenacion',
  templateUrl: './tarjeta-presenacion.component.html',
  styleUrls: ['./tarjeta-presenacion.component.css']
})
export class TarjetaPresenacionComponent implements OnInit {

  @Input()
  dataPersonas: Array<Persona> = [];

  @Output()
  updateLocal = new EventEmitter<Persona[]>();

  public editPersona: Persona = {
    nombre: '',
    edad: null,
    frase: ''
  };

  public auxPersona: Persona = {
    nombre: '',
    edad: null,
    frase: ''
  };
  // formControl
  form: FormGroup;

  constructor(private personaServiceService: PersonaServiceService,
              private formBuilder: FormBuilder
              ) {
                this.buildForm();
              }


  ngOnInit(): void{
    // console.log('input', this.dataPersonas);
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
    if (this.form.valid) {
      const value = this.form.value;
    } else {
      this.form.markAllAsTouched();
    }
  }

  // un geter para evitar repetir codigo en las validaciones html
  get nombreField(): any {
    return this.form.get('nombre');
  }
  get nombreFieldIsValid(): any {
    return this.nombreField.touched && this.nombreField.valid;
  }
  get nombreFieldIsInvalid(): any {
    return this.nombreField.touched && this.nombreField.invalid;
  }

  get edadField(): any {
    return this.form.get('edad');
  }
  get edadFieldIsValid(): any {
    return this.edadField.touched && this.edadField.valid;
  }
  get edadFieldIsInvalid(): any {
    return this.edadField.touched && this.edadField.invalid;
  }

  get fraseField(): any {
    return this.form.get('frase');
  }
  get fraseFieldIsValid(): any {
    return this.fraseField.touched && this.fraseField.valid;
  }
  get fraseFieldIsInvalid(): any {
    return this.fraseField.touched && this.fraseField.invalid;
  }

  renderPerson(persona: Persona): void{
    this.editPersona.nombre = persona.nombre;
    this.editPersona.edad = persona.edad;
    this.editPersona.frase = persona.frase;
    this.auxPersona = persona;
    // console.log('persona', persona);
  }


  editPerson(editPersona: Persona, searchPerson: Persona): void{
    const personas = [];
    personas.push(editPersona);
    personas.push(searchPerson);
    this.updateLocal.emit(personas);
    console.log('dataPersonas' , this.dataPersonas);
  }


}
