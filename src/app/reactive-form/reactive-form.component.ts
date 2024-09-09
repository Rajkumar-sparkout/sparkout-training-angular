import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CustomValidators } from '../validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {

  title = 'Reactive form';

  countries = [
    {"countryName": "India"},
    {"countryName": "Australia"},
    {"countryName": "Srilanka"},
  ];
  public formStatus = '';

  constructor(private titleService: Title){}

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    /**
     * value changes event -> It returns the observable
     */
    // this.register.get('firstName')?.valueChanges.subscribe((value)=> {
    //   console.log(value);   
    // });

    // this.register.valueChanges.subscribe((value)=> {
    //   console.log(value);
    // });

    /**
     * Status changes and status changes event -> It returns the form control status
     */
    this.register.get('email')?.statusChanges.subscribe((status)=> {
      console.log(status);   
    });

    // this.register.statusChanges.subscribe((status)=> {
    //   console.log(status);
    //   this.formStatus = status
    // });
    

  }


  register = new FormGroup({
      firstName : new FormControl("", [Validators.required, CustomValidators.noSpaceAllowed]),
      lastName : new FormControl("", [Validators.required, CustomValidators.noSpaceAllowed]),
      email : new FormControl("", [Validators.required,Validators.email]),
      mobileNumber : new FormControl("", [
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required
      ]),
      userName : new FormControl("", Validators.required),
      address : new FormGroup({
        street : new FormControl("", Validators.required),
        city : new FormControl("", Validators.required),
        country : new FormControl("", Validators.required),
        zipcode : new FormControl("", Validators.required),
      }),
      skills : new FormArray([
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
      ])
  });

  get registerFormControl() {
    return this.register.controls['skills'] as FormArray;
  }

  get registerControl() {
    return this.register.controls;
  }

  public fname: any;
  public lname: any;
  public userName: any;
  generateUserName(){
    this.userName = '';
    this.fname = this.register.get('firstName')?.value;
    this.lname = this.register.get('lastName')?.value;

    if(this.fname.length >= 3){
      this.userName += this.fname.slice(0, 3)
    }else{
      this.userName += this.fname
    }

    if(this.lname.length >= 3){
      this.userName += this.lname.slice(0, 3)
    }else{
      this.userName += this.lname
    }

    this.userName = this.userName.toLowerCase();

  /*
    for setting multiple value (setValue)
  */

    // this.register.setValue({
    //   firstName : JSON.parse(JSON.stringify(this.register.get('firstName')?.value)),
    //   lastName : JSON.parse(JSON.stringify(this.register.get('lastName')?.value)),
    //   email : JSON.parse(JSON.stringify(this.register.get('email')?.value)),
    //   mobileNumber : JSON.parse(JSON.stringify(this.register.get('mobileNumber')?.value)),
    //   userName : this.userName,
    //   address : {
    //     street : JSON.parse(JSON.stringify(this.register.get('address.street')?.value)),
    //     city : JSON.parse(JSON.stringify(this.register.get('address.city')?.value)),
    //     country : JSON.parse(JSON.stringify(this.register.get('address.country')?.value)),
    //     zipcode : JSON.parse(JSON.stringify(this.register.get('address.zipcode')?.value)),
    //   },
    //   skills : JSON.parse(JSON.stringify(this.register.get('skills')?.value))
    // });

  /*
    for setting single value (setValue)
  */
    //  this.register.get('userName')?.setValue(this.userName)

  /*
    for setting single value (patchValue)
  */

    this.register.patchValue({
      userName: this.userName,
      address: {
        city: 'New Delhi'
      }
    });
  }

  onSubmit(){    
    console.log(this.register);
  }

}
