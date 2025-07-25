import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashboardBaseDirective } from './dashboard-base.directive';

@Component({
  selector: 'td-dashboard',
  imports: [],
  template: `
    <button (click)="base.add()">
      Add
    </button>
    <button (click)="base.update()">
      Update
    </button>
    <button (click)="base.delete()">
      Delete
    </button>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DashboardBaseDirective],
})
export class DashboardComponent {
  public readonly base = inject(DashboardBaseDirective);
}
