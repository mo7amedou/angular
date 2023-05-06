import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  constructor(private authService:LoginService , private router:Router){}

  formGroup:any

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('' , [Validators.required]),
      password: new FormControl('' , [Validators.required]),
    })
  }

  loginProces(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(
        (result) => {
        console.log(result);
        localStorage.setItem('token', result.token);
        console.log(result.token)
        this.router.navigate(["/profile"])
      },(err)=>{
        console.log(err);
      });
    }else{
      alert("errer")
    }
  };

}
