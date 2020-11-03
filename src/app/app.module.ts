import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// para poder ocupar ngModel FormsModule
// para poder ocupar formularios reactivos ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// http
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    // ReactiveFormsModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
