import { Component, OnInit } from '@angular/core';

// sevicio
import { PersonaServiceService } from './../../../core/services/persona-service.service';

// modelo
import { Persona } from './../../../core/models/persona.model';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public personas: Array<Persona> = [];

  constructor(private personaServiceService: PersonaServiceService) { }

  ngOnInit(): any{
    this.getAllPersonas();
  }

  getAllPersonas(): void{
    this.personas = this.personaServiceService.getAllPersonas();
    console.log('Consulta de personas', this.personas);
  }

  addNewPersonaPadre(persona: Persona): void{
    console.log('persona desde el padre', persona);
    this.personaServiceService.createNewPersona(persona);
    console.log('add personas' , this.personas);
  }

  deletPersona(persona: Persona): void{
    if (persona) {
      alert(`Borraras a ${persona.nombre}`);
      // console.log('persona', persona);
      this.personaServiceService.deletePersona(persona);
    }
  }

  updateArrayLocal(personas: Persona[]): void {
    // console.log('updatePersonaPadre', personas);
    this.personaServiceService.updatePersona(personas[0], personas[1]);
    this.personaServiceService.getAllPersonas();
  }

}
