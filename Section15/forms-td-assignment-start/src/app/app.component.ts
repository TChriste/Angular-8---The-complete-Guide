import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) form: NgForm;
  subscriptionTypes = ['Basic', 'Advanced', 'Pro'];
  defaultSubscriptionType = 'Advanced';
  data = {
    email: '',
    subscriptionType: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.data.email = this.form.value.email;
    this.data.subscriptionType = this.form.value.subscriptionType;
    this.data.password = this.form.value.password;
    this.form.reset();
  }
}
