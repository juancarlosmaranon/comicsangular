import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijocomicComponent } from './components/hijocomic/hijocomic.component';
import { PadrecomicComponent } from './components/padrecomic/padrecomic.component';

@NgModule({
  declarations: [
    AppComponent,
    HijocomicComponent,
    PadrecomicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
