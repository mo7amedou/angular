import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../service/profile.service';
import { Student } from '../../type/Student';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  isResultLoaded = false;

  StudentArray : any[] = [];
  

  studentToUpdate={
    idst:"",
    id:"",
    fullName:"",
    gender:"",
    numero:"",
    age:"",
    nni:""
   
  };


  constructor(private studentServ:ProfileService , private router:Router){}

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent()
  {
    
    this.studentServ.getAllStudent().subscribe((resultData:any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.StudentArray = resultData;
    },(err)=>{
      console.log(err);
    });
  }
  deleteStudent(student:Student){
    
    this.studentServ.deleteStudent(student.idst).subscribe(
      (resultData: any)=>{
      console.log(resultData);
      alert("student Deletedddd");
      //this.location.reload();
      //this.router.navigate(["/profile"])
    },(err)=>{
      console.log(err);
    }
    );
  }
  updateStudent(){
    this.studentServ.updateStudent(this.studentToUpdate).subscribe(
      (resultData:any)=>{
      console.log(resultData);
    },(err)=>{
      console.log(err);
    }
    )
  }
  edit(student:any){
    this.studentToUpdate=student
}
}
