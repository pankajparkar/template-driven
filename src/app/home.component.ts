import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'td-home',
  imports: [RouterLink],
  template: `
    <h3>Separate Components</h3>
    <ul>
      <li>
        <a routerLink="/dashboard">
          Dashboard
        </a>
      </li>
    </ul>

    <hr>

    <h3>Separate Components</h3>
    <ul>
      <li>
        <a routerLink="/dashboard">
          Dashboard
        </a>
      </li>
    </ul>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
