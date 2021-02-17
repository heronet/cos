import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(`http://localhost:5000/api/students/`).subscribe((res: { count: number, data: []}) => {
      console.log(res.data);
    })
  }
}
