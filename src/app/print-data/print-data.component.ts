import { Component, OnInit } from '@angular/core';
import { NewEmployeeService } from '../shared/new-employee.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-print-data',
  templateUrl: './print-data.component.html',
  styleUrls: ['./print-data.component.css']
})
export class PrintDataComponent implements OnInit {
  listData!: MatTableDataSource<any>;
  displayedColumns:string[]=['name','gender'];
  constructor(public service: NewEmployeeService ) { }

  ngOnInit(): void {
    this.service.getemployee().subscribe(
      list=>{
          let array =list.map(item=>{
            return{
               //$key: item.key,
              //...item.payload.child("name").val()
              name:item.payload.child("name").val()+" "+item.payload.child("fatherName").val(),
              gender:item.payload.child("gender").val()
            };
            
          });

          console.log(array);
          this.listData=new MatTableDataSource(array);

    })

}
}
