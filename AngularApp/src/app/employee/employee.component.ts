import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee, EmployeeService } from '../shared';

declare var M: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.employees = [];
    this.refreshEmployeeList();

  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm) {
      employeeForm.resetForm();

      this.employeeService.selectedEmployee = {
        _id: "",
        name: "",
        position: "",
        salary: null,
        office: ""
      }
    }
  }

  onSubmit(employeeForm?: NgForm) {
    if (employeeForm.value._id == "") {
      this.employeeService.postEmployee(employeeForm.value).subscribe((res) => {
        this.resetForm(employeeForm);
        this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully!', classes: 'rounded' });
      });
    } else {
      this.employeeService.putEmployee(employeeForm.value).subscribe((res) => {
        this.resetForm(employeeForm);
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully!', classes: 'rounded' });
      });
    }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeist().subscribe((res) => {
      this.employees = res as Employee[];
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;

  }
  onDelete(_id: string, employeeForm: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(employeeForm);
        M.toast({ html: 'Deleted successfully!', classes: 'rounded' });
      });
    }


  }

}
