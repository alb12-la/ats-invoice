import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  @Output() finishedForm: EventEmitter<FormGroup> = new EventEmitter();
  invoiceForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  pickUpTime = {};
  pickUpDate = {};
  dropOffTime = {};
  showModal = false;
  displayDriverForm = false;
  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      billingContactName: new FormControl(''),
      billingContactPhone: new FormControl(''),
      invoiceNumber: new FormControl('', Validators.required),
      paymentMethod: new FormControl(''),
      serviceType: new FormControl(''),
      passengerName: new FormControl(''),
      passengerPhone: new FormControl(''),
      numberOfPassengers: new FormControl(''),
      pickupLocation: new FormControl(''),
      pickupDate: new FormControl(''),
      pickupTime: new FormControl(''),
      dropoffLocation: new FormControl(''),
      billItemsArray: new FormArray([]),
    })

    this.addBillItem();
  }

  get billItemsArray(): FormArray {
    return this.invoiceForm.controls['billItemsArray'] as FormArray;
  }

  addBillItem() {
    this.billItemsArray.push(
      this.fb.group({
        description: new FormControl(''),
        cost: new FormControl('')
      })
    )
  }

  onDriverFormToggle(){
    this.displayDriverForm = !this.displayDriverForm;
    if ( this.displayDriverForm){
      // add controls to form
    } else {
      // remove those controls if they already exist.
    }
  }

  removeBillItem(indexOfBillToRemove: number) {
    this.billItemsArray.removeAt(indexOfBillToRemove);
  }


  exportToPdf() {
    // Manually get date from form
    this.invoiceForm.controls['pickupDate'].setValue(
      this.convertDateStructToString(this.pickUpDate)
    )

    this.invoiceForm.controls['pickupTime'].setValue(
      this.convertTimeStructToString(this.pickUpTime)
    )

    // Send up
    this.finishedForm.emit(this.invoiceForm);
  }


  convertDateStructToString(obj: any): string {
    return `${obj.month}/${obj.day}/${obj.year}`
  }


  convertTimeStructToString(obj: any): string {
    return `${obj.hour}:${obj.minute}`
  }
}
