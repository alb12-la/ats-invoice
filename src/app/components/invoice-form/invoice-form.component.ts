import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  pickUpTime = {};
  dropOffTime = {};
  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      billingContactName: new FormControl(''),
      billingContactPhone: new FormControl(''),
      invoiceNumber: new FormControl(''),
      paymentMethod: new FormControl(''),
      serviceType: new FormControl(''),
      passengerName: new FormControl(''),
      passengerPhone: new FormControl(''),
      numberOfPassengers: new FormControl(''),
      pickupLocation: new FormControl(''),
      pickupDate: new FormControl(''),
      pickupTime: new FormControl(''),
      dropoffLocation: new FormControl(''),
    })
  }
}