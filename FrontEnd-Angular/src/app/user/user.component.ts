import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Subject } from 'rxjs';
import { Http } from '@angular/http';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Role } from '../classes/role';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
@Injectable()
export class UserComponent implements OnInit {
  user: User = new User();
  users: User[] = [];
  roles: Role[] = [];
  constructor(private http: Http, private router: Router, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    })
  } 


}
