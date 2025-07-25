import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'td-root',
  imports: [RouterOutlet],
  template: `Test`,
  styles: ``
})
export class AppComponent {
  title = 'template-driven';
}
