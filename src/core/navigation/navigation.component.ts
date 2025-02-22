import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PageRoute } from '../../app/app.routes';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

  routes = input.required<PageRoute[]>()

}
