import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'showcase';
  name:string = "";
  address:string = "";
  email:string = "";
  phone:string = "";
  skills:string = "";
  hobbies:string = "";
  pastexp:string = "";
}
