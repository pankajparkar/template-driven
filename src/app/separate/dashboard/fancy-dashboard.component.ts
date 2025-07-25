import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashboardBaseDirective } from './dashboard-base.directive';

@Component({
  selector: 'td-fancy-dashboard',
  imports: [],
  template: `
    <button (click)="base.add()">
      Add
    </button>
    <button (click)="base.delete()">
      Delete
    </button>
    <button (click)="base.update()">
      Update
    </button>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DashboardBaseDirective],
})
export class FancyDashboardComponent {
  public readonly base = inject(DashboardBaseDirective);
}
