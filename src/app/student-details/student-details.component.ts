import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from '../student-details.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  data: any = [];
 
  constructor(public service: StudentDetailsService) {}

  ngOnInit(): void {
    this.refresh();
    
    
  }
  refresh(){
   this.service.refreshList().subscribe((result:any)=>{
      this.data=result;
     });
  }

  onSubmit(data:any){
     const data1=data.value;
     this.service.createingDataofStudent(data1).subscribe(()=>{
       console.log("Data added succefully in database");
       this.refresh();
     })

     
    
  }
  deleteStudent(id:any){
    console.log("id",id)
    this.service.deleteStudentFromList(id).subscribe(()=>{
      this.data = this.data.filter((data:any) => data.id !== id);
        // Re-calculate IDs if needed
       
        this.refresh();
        this.recalculateIDs();
    });
  }
  recalculateIDs(){
   for (let i = 0; i < this.data.length; i++) {
      this.data[i].id = i + 1;
    }
  }
  }

