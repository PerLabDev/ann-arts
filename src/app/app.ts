import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRIMENG_COMPONENTS } from './shared/primeng-shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PRIMENG_COMPONENTS, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ann Art Gallery');
}
