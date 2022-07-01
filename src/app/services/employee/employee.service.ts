import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:any = [{
    'name': 'Maik',
    'title': 'Developer',
    'gender': 'M',
    'tenure': 0,
    'salary': 15000
  }];
  constructor() { }

  getEmployees(){
    return this.employees;
  }
  addEmployee(employee: any){
    this.employees.push(employee);
  }
  deleteEmployee(index:number){
    this.employees.splice(index, 1);
  }
  updateEmployee(index: number, employee: any)
  {
    this.employees[index] = employee;
  }
}
