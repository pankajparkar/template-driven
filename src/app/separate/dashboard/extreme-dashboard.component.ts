import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashboardBaseDirective } from './dashboard-base.directive';

@Component({
  selector: 'td-extreme-dashboard',
  imports: [],
  template: `
    <button (click)="base.delete()">
      Delete
    </button>
    <button (click)="base.update()">
      Update
    </button>
    <button (click)="base.add()">
      Add
    </button>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DashboardBaseDirective],
})
export class ExtremeDashboardComponent {
  public readonly base = inject(DashboardBaseDirective);
}
