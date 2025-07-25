import { Directive } from '@angular/core';

@Directive({
  selector: '[tdDashboardBase]'
})
export class DashboardBaseDirective {
  add() {
    console.log('Add');
  }

  update() {
    console.log('update');
  }

  delete() {
    console.log('delete');
  }
}
