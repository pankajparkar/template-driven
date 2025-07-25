import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'td-dashboard',
  imports: [],
  template: `
    <p>
      dashboard works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

}
