import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  users : IUser[] = [];
  error: string = "";

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    }, (error) => {
      console.log("ssss");
      console.log(error);
      this.error = error;
    });
  }
}
