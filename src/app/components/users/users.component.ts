import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  allUsers: any = [];
  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.service
        .getUsers()
        .subscribe((response: any) => {
          console.log(response);
          this.allUsers = response;
        });
  }

}
