import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService} from 'src/app/employee-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private empService:EmployeeServiceService, private toast:ToastrService, private router:Router, private route:ActivatedRoute) { }
  data = {
    firstName:'',
    middleName:'',
    lastName:'',
    age:null
  }
  id:any

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id is', this.id)
    if(this.id) {
      this.empService.getEmployeesById(this.id).subscribe((res: any) => {
        console.log({res})
        this.data = res.items
      })
    }
    
  }

  onSubmit(){
    if(this.id) {
      this.empService.editEmployees(this.id, this.data).subscribe((res: any) => {
        if(res.success === 1) {
          this.router.navigate(['/'])
        }
      })

    } else {
      this.empService.postEmployees(this.data).subscribe((res:any) => {
        console.log({res})
        this.toast.success('successfully added','success')
        if(res.success === 1) {
          this.router.navigate(['/'])
        }
      })

    }
    
  }


  }


