import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  logs = [];

  toggle() {
    this.showDetails = !this.showDetails;
    let currentDay = new Date();
    let date = currentDay.getDate() + '.' + (currentDay.getMonth() + 1) + '.' + currentDay.getFullYear() + ' ' +
               currentDay.getHours() + ':' + currentDay.getMinutes() + ':' + currentDay.getSeconds();
    this.logs.push(date + ' showDetails value : ' + this.showDetails);
  }

  getColor(index) {
    return (index >= 4 ) ? 'steelBlue' : 'white';
  }

}
