import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.form.value);
    this.http.post<{email: string, password: string}>("http://localhost:5000/api/users/login", form.form.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }

}
