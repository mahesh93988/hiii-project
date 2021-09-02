import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Output() parentFunction:EventEmitter<any>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    // let data={name:'hello', age=22}
    // this.parentFunction.emit(data)
  }
  sendData(){
    let data={name:'hello', age:22}
    this.parentFunction.emit(data)

  }

}
