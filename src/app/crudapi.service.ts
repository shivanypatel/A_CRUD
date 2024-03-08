import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudapiService {
 
 modalData :any
// token :any

private crudapiUrl = 'http://localhost:3000'; 
  // token: { email: string; password: string; };
  
constructor(private http: HttpClient) { }

setModalData(email: string, password: string) {
    this.modalData = { email, password };
  }

getModalData() {return this.modalData; }

getAllEmployee() {
     return this.http.get<any>(`${this.crudapiUrl}/posts`);
  }

  postEmployee(data: any) {
    return this.http.post<any>(`${this.crudapiUrl}/posts`, data);
  }


   delete(id:any){
    return this.http.delete<any>(`${this.crudapiUrl}/posts/${id}`)
     }

   
    updateEmployee(data: any,employeeId: any): Observable<any> {
      const url = `${this.crudapiUrl}/posts/${employeeId}`;
      return this.http.put<any>(url, data);
    } 
}
























































































 //  updateEmployee(data: any, id: any): Observable<any> {
    //   const url = `${this.crudapiUrl}/${id}`;
    //   return this.http.put<any>(url, data);
    // }
