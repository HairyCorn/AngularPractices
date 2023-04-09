import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { SelectColorComponent } from './select-color/select-color.component';
import { ColorChromeModule } from 'ngx-color/chrome';
import { NgxColorsModule } from 'ngx-colors';
import { SelectColorsComponent } from './select-colors/select-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    SelectColorComponent,
    SelectColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorChromeModule,
    NgxColorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
