import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { NavigationComponent } from '../core/navigation/navigation.component';
import { pageRoutes } from './app.routes';
import { HighlightComponent } from './shared/highlight/highlight.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, HighlightComponent, NavigationComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected router = inject(Router);

  protected routes = pageRoutes;

  showCounter = toSignal(this.router.events.pipe(
    filter((event) => event instanceof ActivationEnd),
    map((event: ActivationEnd)=> !!event.snapshot.data['showCounter']),
  ));
}
