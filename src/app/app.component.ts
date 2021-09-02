import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-parent';
  name: any;
  age: any;
  parentFunction(data: any)
{
  console.warn(data)
  this.name=data.name;
  this.age=data.age;
}}
