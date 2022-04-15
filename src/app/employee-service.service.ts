import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get<any>('http://localhost:5000/empl')
  }

  postEmployees(data:any) {
    return this.http.post<any>('http://localhost:5000/empl',data)
  }
  getEmployeesById(id:any) {
    return this.http.get<any>(`http://localhost:5000/empl/${id}`)
  }

  editEmployees(id:any,data:any) {
    return this.http.put<any>(`http://localhost:5000/empl/${id}`, data);
  }

  deleteEmployees(id:any) {
    return this.http.delete<any>(`http://localhost:5000/empl/${id}`);
  }
}
