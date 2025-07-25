import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'td-home',
  imports: [RouterLink],
  template: `
    <h3>Demo Links</h3>
    <ul>
      <li>
        <a routerLink="/dashboard">
          Dashboard
        </a>
      </li>
      <li>
        <a routerLink="/dashboard-fancy">
          Dashboard Fancy
        </a>
      </li>
    </ul>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
