import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';
import { HighlightComponent } from '../../../../shared/highlight/highlight.component';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  protected highlightComponent = inject(HighlightComponent);

  protected timer: Signal<number | null> = toSignal<number>(timer(0, 2000), { initialValue: null })
}
