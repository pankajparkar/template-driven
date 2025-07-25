import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar.component';

@Component({
  selector: 'td-root',
  imports: [RouterOutlet, Navbar],
  template: `
    <td-navbar />
    <router-outlet />
  `,
  styles: ``
})
export class AppComponent {
}
