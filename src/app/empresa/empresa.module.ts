import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// para poder ocupar ngModel FormsModule
// para poder ocupar formularios reactivos ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { TarjetaPresenacionComponent } from './components/tarjeta-presenacion/tarjeta-presenacion.component';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';
import { TablePostComponent } from './components/table-post/table-post.component';
import { CommentsTableComponent } from './components/comments-table/comments-table.component';


@NgModule({
  declarations: [
    EmpresaComponent,
    TarjetaPresenacionComponent,
    FormularioPersonaComponent,
    TablePostComponent,
    CommentsTableComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpresaModule { }
