import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  addTask(task:string){
    return this.http.post("http://localhost:3000/title",{
      title:task
    })
  }
}
