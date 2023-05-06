import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private http:HttpClient) { }

  saveStudent(data:any):Observable<any>{
   
    return this.http.post("http://localhost:8080/api/v1/auth/student/saveStudent" ,data)
  }
  getAllStudent(){
    let headers = new HttpHeaders()
    headers.append('Authorization' ,'Bearer ' + localStorage.getItem('token'))
    console.log(localStorage.getItem('token'));
   headers.append("Access-Control-Allow-Origin" , "*") 
    return this.http.get('http://localhost:8080/api/v1/student/getAllStudent',{headers:headers} )
  }
  deleteStudent(idst:any):Observable<any>{
    let headers = new HttpHeaders()
    headers.append('Authorization' ,'Bearer ' + localStorage.getItem('token'))
    console.log(localStorage.getItem('token'));
    headers.append("Access-Control-Allow-Origin" , "*")
    return this.http.delete('http://localhost:8080/api/v1/student/deleteStudent'+'/'+idst ,{headers:headers} )
  }
  updateStudent(data:any):Observable<any>{
    let headers = new HttpHeaders()
    headers.append('Authorization' ,'Bearer ' + localStorage.getItem('token'))
    console.log(localStorage.getItem('token'));
    headers.append("Access-Control-Allow-Origin" , "*")
    return this.http.put('http://localhost:8080/api/v1/student/updateStudent'+'/'+data.idst, data ,{headers:headers}  )
  }

}

