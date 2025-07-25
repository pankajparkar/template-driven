import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'td-dashboard-fancy',
  imports: [],
  template: `
    <p>
      dashboard-fancy works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardFancyComponent {

}
