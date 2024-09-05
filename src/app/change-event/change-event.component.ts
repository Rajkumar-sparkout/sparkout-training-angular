import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { FormControl, FormsModule, PristineChangeEvent, ReactiveFormsModule, StatusChangeEvent, TouchedChangeEvent, ValueChangeEvent } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-change-event',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './change-event.component.html',
  styleUrl: './change-event.component.css'
})
export class ChangeEventComponent implements OnInit{

  //ngModelChange event
  searchValue: String = "Raj";

  searchValueChange(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.searchValue = value;
  }

  modelValueChange(value: any){
    this.searchValue = value;
  }

  searchForm = {
    searchValue: "Raj",
  }

  onsearchSubmit(){
    console.log('onsearchSubmit', this.searchForm); 
  }

  //Change event
  title = new FormControl("My App");
  ngOnInit(){
    this.title.events.subscribe((event)=> {
      if(event instanceof TouchedChangeEvent){
        console.log('Touched:' +event.touched); 
      }
      if(event instanceof PristineChangeEvent){
        console.log('pristine:' +event.pristine); 
      }
      if(event instanceof ValueChangeEvent){
        console.log('ValueChanged:' +event.value); 
      }
      if(event instanceof StatusChangeEvent){
        console.log('Status:' +event.status); 
      }
    });
  }

  chageHandler(args: any){
    console.log("args" +args);
    
  }

}
