import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDatepickerModule, NgbModalModule, NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceDisplayComponent } from './components/invoice-display/invoice-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceFormComponent,
    InvoiceDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTimepickerModule,
    NgbDatepickerModule,
    NgbModule,
    NgbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
