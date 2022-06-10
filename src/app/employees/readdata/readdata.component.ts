
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NewEmployeeService } from 'src/app/shared/new-employee.service';
@Component({
  selector: 'app-readdata',
  templateUrl: './readdata.component.html',
  styleUrls: ['./readdata.component.css']
})
export class ReaddataComponent implements OnInit {

  constructor(public service: NewEmployeeService) { }
  listData!: MatTableDataSource<any>;

  displayedColumns:string[]=['city','department','designation','fathername','gender','landline','updatebutton','deletebutton'];
  ngOnInit(): void {
    this.service.getemployee().subscribe(
    list=>{
        let array =list.map(item=>{
          return{
            $key: item.key,
            ...item.payload.val()
          };
          
        });
        console.log(array);
        console.log(list);
        this.listData=new MatTableDataSource(array);
    });
  }
  onDelete(key:any){
  

    this.service.deleteEmployee(key);
    
  }
  
  onUpdate(emploee:any)
  {
    this.service.initializeFormGroupUpdate(emploee);
    //this.service.deleteEmployee(emploee.$key);
  }
}

