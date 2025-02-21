import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { HighlightComponent } from '../../../../shared/highlight/highlight.component';

@Component({
  selector: 'app-async',
  imports: [
    AsyncPipe,
  ],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncComponent {
  protected highlightComponent = inject(HighlightComponent);

  protected timer$: Observable<number> = timer(1000, 2000);
}
