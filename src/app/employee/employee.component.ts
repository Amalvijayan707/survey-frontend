import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeServiceService,private router:Router, private toast:ToastrService) { }
  employeeArray:any=[]
  ngOnInit() {
    this.empService.getEmployees().subscribe((res:any) => {
      console.log({res})
      this.employeeArray = res.items
    })
  }

  navigate(){
    this.router.navigate(['/create'])

  }

  navigateToEdit(id:any){
    this.router.navigate([`/edit/${id}`])

  }

  delete(id: any) {
    if(confirm('Are you sure you want to delete')) {
      this.empService.deleteEmployees(id).subscribe((res: any) => {
        if(res.success === 1) {
          this.toast.success('successfully deleted', 'success')
          this.ngOnInit()
  
        }
      })
    }

  }

}
