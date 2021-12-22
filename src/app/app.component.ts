import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import{MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1,first_name:'Sebastian',last_name:'Eschweiler',email:'sebastian@codingthesmartway'},
  {id: 2,first_name:'Steve',last_name:'Palmer',email:'steve@codingthesmartway'},
  {id: 3,first_name:'Ann',last_name:'Smith',email:'ann@codingthesmartway'}
];
  

export class AppComponent {
 displayedColumns = ['id','first_name','last_name','email','Action'];
 dataSource = ELEMENT_DATA;

  @ViewChild('paginator') paginator! : MatPaginator; 
  @ViewChild(MatSort) matSort! : MatSort;
  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  
  constructor(private dialogRef : MatDialog){}
  
  

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
  
  openDialog(action: any,obj: { action: any; }){
    obj.action = action;

    this.dialogRef.open(PopUpComponent,{
    const this.dialogRef = this.dialog.open(PopUpComponent, {
      width: '250px',  
      data:{
        first_Name:[''],
        last_Name:[''],
        email:[''],
      }
      });

    }

  

 
onRemove(index:number){
  console.log(index);
  this.dataSource.data.splice(index,1);
  this.dataSource.filter="";
}


}
