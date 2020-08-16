import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee = new Employee();
  
  baseurl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp : Employee) {
return this.http.post(this.baseurl, emp);
  }

  getEmployeeist(){
    return this.http.get(this.baseurl);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseurl +`/${emp._id}` , emp);
  }
  deleteEmployee(_id: string) {
    return this.http.delete(this.baseurl +`/${_id}`);
  }
}
