import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {
usersArr : IUser[] = []
  constructor(
    private _usersservice : UsersService
  ) { }

  ngOnInit(): void {
    this._usersservice.fetchallposts().subscribe({
      next: data=>{
        this.usersArr = data
        console.log(data);
        
      }
    })
  }

}
