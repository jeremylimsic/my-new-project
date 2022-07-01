import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  message = 'asdasdasd';
  color ='blue';
  isBig = true;
  isChanged = false;
  isDisplayed = true;
  alertMessage = '';
  content = '';
  newstring= 'size-30';
  textsss = '';
  name = '';
  gender = '';
  title = '';
  tenure = 0;
  salary = 0;
  display = true;
  displaybool = true;
  employees:any = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  switchSize() {
    this.textsss = 'asdasda';
  }
  switchDisplay(){
    this.isDisplayed = !this.isDisplayed;
  }
  displayAlert(message: string){
    alert(message);
  }
  clearEmployeeInputs(){
    this.name = '';
    this.title = '';
    this.gender = '';
    this.tenure = 0;
    this.salary = 0;
  }
  // displayValue(display1: string){
  //   if(display1=="false")
  //   {
  //     this.displaybool = false;
  //   }
  //   else{
  //     this.displaybool = true;
  //   }
  // }
  fetchEmployees() {
    this.employees = this.employeeService.getEmployees();
  }
  addEmployee(name: string, title: string, gender: string, tenure: number, salary: number, display: boolean){
    const employee = {
      name: name,
      gender: gender,
      title: title,
      tenure: tenure,
      salary: salary,
      display: display
    };
    this.employeeService.addEmployee(employee);
    // this.employees.push(employee);
    // console.log(this.employees);
    // this.displayValue(display);
    this.clearEmployeeInputs();
  }
  updateEmployee(index: number, name: string, title: string, gender: string, tenure: number, salary: number, display: boolean) {
    const employee = {
      name: name,
      gender: gender,
      title: title,
      tenure: tenure,
      salary: salary,
      display: display,
      isChanged: true
    };
    this.employeeService.updateEmployee(index, employee);
    // this.employees[index] = employee;
    this.clearEmployeeInputs();
  }

  deleteEmployee(index: number, employee: any) {
    this.employeeService.deleteEmployee(index);
    //this.employees.splice(index,1);
    this.displayAlert("Deleted: "+employee.name);
  }
  updateHeader(){
    
  }
}
