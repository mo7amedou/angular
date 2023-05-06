import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs';
import { ProfileService } from '../../service/profile.service';
import { Student } from '../../type/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  student={
    
    idst:"",
    id:"",
    fullName:"",
    gender:"",
    numero:"",
    age:"",
    nni:""
   
  };
    

  constructor(private studentServ:ProfileService , private router:Router ){}

  save(){
    
    this.studentServ.saveStudent(this.student).subscribe((result) => {
      console.log(result);
      this.router.navigate(["/profile"])
    },(err)=>{
      console.log(err);
    });
  }

  ngOnInit(){
    //this.initForm();
  }

  /*initForm(){
    this.student= new FormGroup ({
      fullName : new FormControl(),
      numero : new FormControl(),
      gender: new FormControl(),
      age: new FormControl(),
      nni: new FormControl(),

    })
  }*/

  /*save(){
    if(this.student.valid){
      this.studentServ.saveStudent(this.student.value ).subscribe((result) => {
        console.log(result);
        //localStorage.setItem("token" ,result.token);
        this.router.navigate(["/profile"])
      });
    }
    else{
      alert("err")
    }
  };*/

}
