import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { log } from 'console';

interface productFormType{
  productName: FormControl<string | null>
  brand: FormControl<string | null>
  quantity: FormControl<number | null>
  price: FormControl<number | null>
}

@Component({
  selector: 'app-typed-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './typed-form.component.html',
  styleUrl: './typed-form.component.css'
})

export class TypedFormComponent {

  /**
  typed form checks the input data type -> type checking
  */

  // productForm: FormGroup;
  productForm: FormGroup<productFormType>;

  constructor(private fb: FormBuilder){
    this.productForm = this.fb.group({
      productName: this.fb.control(''),
      brand: this.fb.control(''),
      quantity: this.fb.control(0),
      price: this.fb.control(0),
    });
  }

  onSubmit(){
    let productName = this.productForm.get('productName')?.value
    let brand = this.productForm.get('brand')?.value
    let quantity = this.productForm.get('quantity')?.value
    let price = this.productForm.get('price')?.value

    // console.log(productName?.trim());
    // console.log(brand?.trim());
    // console.log(price);
    // console.log(quantity);

    this.productForm.setValue({
      productName: "Something",
      brand: 'abc',
      quantity: 20,
      price: 20
    });
  }

}
