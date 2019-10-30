import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW1';
  inputedVaule: string | number;
  Value: string | number;
  LoginClick: boolean;
  RegisterClick: boolean;

  Houses = [
    {
      id: 1,
      city: 'Kyiv',
      street: 'Lvivska',
      rooms: 3,
      price: 300000
    },
    {
      id: 2,
      city: 'Lviv',
      street: 'Lychakivs\'ka',
      rooms: 2,
      price: 200000
    },
    {
      id: 3,
      city: 'Zolochiv',
      street: 'Striltsiv',
      rooms: 4,
      price: 20000
    },
    {
      id: 4,
      city: 'New-York',
      street: 'Banditos',
      rooms: 1,
      price: 20000000
    },
    {
      id: 1,
      city: 'Berlin',
      street: 'Gut',
      rooms: 2,
      price: 150000
    },
  ];

  onInput(ev) {
    this.inputedVaule = ev.target.value;
  }

  onClick() {
    this.Value = this.inputedVaule;
  }

  registerButton() {
    this.LoginClick = !this.LoginClick;
    this.RegisterClick = false
  }

  loginButton() {
    this.RegisterClick = !this.RegisterClick;
    this.LoginClick = false
  }
}
