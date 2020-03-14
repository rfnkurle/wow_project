import { Component } from '@angular/core';
import { MatButton, MatToolbar } from '@angular/material'
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wow-project';

  clickTest(){
    alert("Dumb button was clicked")
  }
}
