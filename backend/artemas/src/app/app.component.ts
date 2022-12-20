import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { __param } from 'tslib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'artemas';
  results: any;
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    return this.httpClient.get('http://localhost:5000/api/users').subscribe(res => {
      this.results = res
    })
  }
  addUser() {
    return this.httpClient.post('http://localhost:5000/api/users/add', {
      firstname,
      lastname,
      gender,
      email,
      phone,
      password,
    }).subscribe(res => {
      console.log(res);
    })
  }
  updateUser() {
    return this.httpClient.get(`http://localhost:5000/api/users/update${params.id}`).subscribe(res => {
      console.log(res);
      
    })
  }
  deleteUser() {
    return this.httpClient.get(`http://localhost:5000/api/users/delete${params.id}`).subscribe(res => {
      console.log(res);
      
    })
  }

}
