import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaComponent } from './components/empresa/empresa.component';
import { TablePostComponent } from './components/table-post/table-post.component';
const routes: Routes = [
  {
    path: 'empresa',
    component: EmpresaComponent
  },
  {
    path: 'tablePost',
    component: TablePostComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
