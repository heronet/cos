import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.form.value);
    this.http.post<User>("http://localhost:5000/api/users/signup", form.form.value).subscribe(res => {
      console.log(res);
    });
  }
}
