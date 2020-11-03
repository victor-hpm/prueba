import { Injectable } from '@angular/core';

import { Persona } from './../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

//  public persona: Persona = {
//     nombre: '',
//     edad: null,
//     frase: ''
//   };

  public personas: Array<Persona> = [
    {
      nombre: 'Lao Tsé',
      edad: 21,
      frase: 'No hay que ir  atrás ni para darse impulso',
      direccion: {
        id: '1',
        calle: 11,
        colonia: 'La cebada',
        pais: 'México'
      }
    },
    {
      nombre: 'Mahatma Gandhi',
      edad: 22,
      frase: 'No hay caminos para la paz; la paz es el camino',
      direccion: {
        id: '2',
        calle: 12,
        colonia: 'Narvarte',
        pais: 'México'
      }
    },
    {
      nombre: 'John Lennon',
      edad: 23,
      frase: 'Haz el amor y no la guerra',
      direccion: {
        id: '3',
        calle: 13,
        colonia: 'La Roma',
        pais: 'México'
      }
    },
    {
      nombre: 'Charles Baudelaire',
      edad: 24,
      frase: 'Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse',
      direccion: {
        id: '4',
        calle: 14,
        colonia: 'José Lopez Pertillo',
        pais: 'México'
      }
    },
    {
      nombre: 'Jacinto Benavente',
      edad: 25,
      frase: 'Lo peor que hacen los malos es obligarnos a dudar de los buenos',
      direccion: {
        id: '5',
        calle: 15,
        colonia: 'La Nopalera',
        pais: 'México'
      }
    },
    {
      nombre: 'Bob Marley',
      edad: 26,
      frase: 'Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos',
      direccion: {
        id: '6',
        calle: 16,
        colonia: 'Condeza',
        pais: 'México'
      }
    },
    {
      nombre: 'Confucio',
      edad: 27,
      frase: 'Aprende a vivir y sabrás morir bien',
      direccion: {
        id: '7',
        calle: 17,
        colonia: 'Ajusco I',
        pais: 'México'
      }
    },
    {
      nombre: 'Albert Einstein',
      edad: 28,
      frase: 'Cada día sabemos más y entendemos menos ',
      direccion: {
        id: '8',
        calle: 18,
        colonia: 'Centro',
        pais: 'México'
      }
    },
    {
      nombre: 'San Agustín',
      edad: 29,
      frase: 'El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad ',
      direccion: {
        id: '9',
        calle: 19,
        colonia: 'Azteca',
        pais: 'México'
      }
    },
    {
      nombre: 'Casanova',
      edad: 30,
      frase: 'No hay nada que un hombre no sea capaz de hacer cuando una mujer le mira',
      direccion: {
        id: '10',
        calle: 20,
        colonia: 'Olimpica',
        pais: 'México'
      }
    },
  ];

  constructor() { }


  getAllPersonas(): Array<Persona>{
    return this.personas;
  }

  createNewPersona(persona: Persona): any{
    this.personas.push(persona);
  }

  deletePersona(persona: Persona): any{
    // console.log( 'persona desde servicio', persona);
    for (let i = 0; i <= this.personas.length; i++) {
        if (JSON.stringify(persona) === JSON.stringify(this.personas[i])) {
          this.personas.splice(i, 1);
        }
    }
    console.log('borrando desde servicio', persona);
  }


  updatePersona(editPersona: Persona, searchsPerson: Persona): any{
    for (let i = 0; i <= this.personas.length; i++) {
      if (JSON.stringify(searchsPerson) === JSON.stringify(this.personas[i])) {
        console.log('es igual', this.personas);
        this.personas[i].nombre = editPersona.nombre;
        this.personas[i].edad = editPersona.edad;
        this.personas[i].frase = editPersona.frase;
        console.log('this i', this.personas[i]);
      }else{
        console.log('no se encontro persona');
      }
    }
  }


}
