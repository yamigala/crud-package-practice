import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public orderDetails: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderDetails = this.fb.group({});
    }

  ngOnInit() {
    this.orderDetails = this.fb.group({
      itemName: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      noOfItem: ['', Validators.required],
      price: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNo: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  onSubmit(data) {
    console.log(this.orderDetails, data);
    console.log('data added');
  }
}
