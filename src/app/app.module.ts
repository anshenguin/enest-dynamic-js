import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { EmailItemComponent } from './input-box/email-item/email-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InputBoxComponent, EmailItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
