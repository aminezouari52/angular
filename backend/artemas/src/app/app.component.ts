import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'artemas';
  results = '';
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.httpClient.get('http://localhost:5000/api/users').subscribe((response:any) => {
      this.results = response
    },(error) => {
      console.log(error);
      
    })
  }

}
