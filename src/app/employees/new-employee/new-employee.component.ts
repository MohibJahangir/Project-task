("strict mode")
import { InterpolationConfig } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import { countries } from 'src/app/shared/countrydata';
import { NewEmployeeService } from 'src/app/shared/new-employee.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  
  constructor(public service: NewEmployeeService, public router : Router)
   {
    //console.log(this.service.form.get("$key"))
    }
  
   
  religions=[
    {id: 1,value:'Islam' },
    {id:2,value :'Christian'},
    {id:3,value:'hindu'}
  ];
  designations=[
    {id: 1,value:'Teacher' },
    {id:2,value :'Admin'},
    {id:3,value:'Lab attendent'}
  ];
  //public countries:any=countries
  ngOnInit(): void {
    this.service.getemployee();
  }
  OnlyNumbersAllowed(event:any):boolean
  {
    const charcode=(event.which)?event.which:event.keycode;
if(charcode>31&&(charcode<48||charcode>57))
      return false;
  
  return true;
}


onSubmit() {
if(this.service.form.valid)
{
  // console.log(this.service.form.get("$key"));
if(this.service.form.get("$key")?.value===null||this.service.form.get("$key")?.value===undefined)
{
  this.service.insertEmployee(this.service.form.value);
  //console.log(this.service.form.value);
  this.service.form.reset();
  this.service.initializeFormGroup();
}
else{
  this.service.updateEmployee(this.service.form.value);
  //console.log(this.service.form.value);
  //let nname=this.service.form.get('name')?.value;
  this.service.form.reset();
  this.service.initializeFormGroup();
}
}
}
// onUpdate()
// {

//   if(this.service.form.valid )
// {
 
  
  
// }
// }
}
// else{
//   alert("please fill all field");
// }
// }
