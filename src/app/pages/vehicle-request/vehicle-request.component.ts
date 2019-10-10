import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vehicle-request',
  templateUrl: './vehicle-request.component.html',
  styleUrls: ['./vehicle-request.component.scss']
})
export class VehicleRequestComponent implements OnInit {

  vehicleRequestForm: FormGroup;

  personalDetailsForm: FormGroup;
  flightDetailsForm: FormGroup;
  vehicleDetailsForm: FormGroup;

  get formArray(): AbstractControl | null {
    return this.vehicleRequestForm.get('formArray');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.vehicleRequestForm = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          passportNo: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]]
        }),
        this.formBuilder.group({
          arrivingFrom: ['', Validators.required],
          arrivalDate: ['', Validators.required],
          arrivalTime: ['', Validators.required],
          flightNo: ['']
        }),
        this.formBuilder.group({
          vehicleType: ['', Validators.required],
          luxuryType: ['', Validators.required]
        })
      ])
    });

    this.personalDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      passportNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.flightDetailsForm = this.formBuilder.group({
      arrivingFrom: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      flightNo: ['']
    });

    this.vehicleDetailsForm = this.formBuilder.group({
      vehicleType: ['', Validators.required],
      luxuryType: ['', Validators.required]
    });
  }

  onSubmit() {
    alert('Thanks!');
  }
}
