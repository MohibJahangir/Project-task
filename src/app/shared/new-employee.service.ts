import { Injectable } from '@angular/core';
import { FormGroup,FormControl ,Validators} from '@angular/forms';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class NewEmployeeService {

  constructor(private firebase:AngularFireDatabase) { }
   employeeList!: AngularFireList<any>;
  form: FormGroup=new FormGroup({
    $key:new FormControl(null),
    name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    dateOfBirth: new FormControl('',[Validators.required]),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(11), Validators.pattern("^((\\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$")]),
    nationality: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    religion: new FormControl('',[Validators.required]),
    appointmentDate: new FormControl('',[Validators.required]),
    passportNo: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{10}")]),
    department: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    city: new FormControl('', Validators.pattern('[a-zA-Z]*')),
    fatherName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    nicNo: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{5}[-]{1}[0-9]{7}[-]{1}[0-9]{1}")]),
    landLineNo: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{11}")]),
    gender: new FormControl('',[Validators.required]),
    active: new FormControl('',[Validators.required]),
    joiningDate: new FormControl('',[Validators.required]),
    designation: new FormControl('',[Validators.required]),
    streetAddress: new FormControl('',[Validators.required])
  });
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      dateOfBirth: '',
      mobileNo: '',
      nationality: '',
      religion: '1',
      appointmentDate:'',
      passportNo:'',
      department: '',
      city: '',
      fatherName: '',
      nicNo:'',
      landLineNo:'',
      gender:'',
      active:'',
      joiningDate:'',
      designation:'',
      streetAddress:''
    });
  }
  initializeFormGroupUpdate(employee:any) {
    this.form.setValue({
     $key: employee.$key,
     name: employee.name,
     dateOfBirth: employee.dateOfBirth,
     mobileNo: employee.mobileNo,
     nationality: employee.nationality,
     religion: employee.religion,
     appointmentDate:employee.appointmentDate,
     passportNo:employee.passportNo,
     department: employee.department,
     city: employee.city,
     fatherName: employee.fatherName,
     nicNo:employee.nicNo,
     landLineNo:employee.landLineNo,
     gender:employee.gender,
     active:employee.active,
     joiningDate:employee.joiningDate,
     designation:employee.designation,
     streetAddress:employee.streetAddress,
    });
  }
getemployee(){
  this.employeeList=this.firebase.list('employees')
  return this.employeeList.snapshotChanges();
}
  insertEmployee(employee:any){
  this.employeeList.push({
  name: employee.name,
  dateOfBirth: employee.dateOfBirth,
  mobileNo: employee.mobileNo,
  nationality: employee.nationality,
  religion: employee.religion,
  appointmentDate:employee.appointmentDate,
  passportNo:employee.passportNo,
  department: employee.department,
  city: employee.city,
  fatherName: employee.fatherName,
  nicNo:employee.nicNo,
  landLineNo:employee.landLineNo,
  gender:employee.gender,
  active:employee.active,
  joiningDate:employee.joiningDate,
  designation:employee.designation,
  streetAddress:employee.streetAddress,
  
})
  }

  updateEmployee(employee:any){
    this.employeeList.update(employee.$key,
      {
        name: employee.name,
        dateOfBirth: employee.dateOfBirth,
        mobileNo: employee.mobileNo,
        nationality: employee.nationality,
        religion: employee.religion,
        appointmentDate:employee.appointmentDate,
        passportNo:employee.passportNo,
        department: employee.department,
        city: employee.city,
        fatherName: employee.fatherName,
        nicNo:employee.nicNo,
        landLineNo:employee.landLineNo,
        gender:employee.gender,
        active:employee.active,
        joiningDate:employee.joiningDate,
        designation:employee.designation,
        streetAddress:employee.streetAddress,
      });
    }
    deleteEmployee($key:string)
    {
      this.employeeList.remove($key);
    }
};
// export interface Countries {
//   code: string
//   code3: string
//   name: string
//   number: string
//}
