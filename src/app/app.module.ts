import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputPasswordComponent } from './input-password/input-password.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputButtonComponent,
    InputDateComponent,
    InputEmailComponent,
    InputPasswordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
