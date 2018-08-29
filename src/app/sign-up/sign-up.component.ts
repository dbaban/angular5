import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }
  onSubmit(form:NgForm){
    this.userService.registerUser(form.value).
    subscribe((data:any) => {
        if(data.Succeeded ==true)
        {}
    });

  }
}
