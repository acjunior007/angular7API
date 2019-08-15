import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { DataService } from './servicos/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users$: User[];
  title = 'angular7API';

  constructor(
    private dataServices: DataService
  ){  }
  
  ngOnInit(){
    return this.dataServices.getUsers().subscribe(data => this.users$ = data);
  }
}
