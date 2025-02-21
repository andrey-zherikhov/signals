import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { HighlightComponent } from '../../shared/highlight/highlight.component';
import { AsyncComponent } from './components/async/async.component';
import { SignalComponent } from './components/signal/signal.component';

@Component({
  selector: 'app-example1',
  imports: [
    AsyncComponent,
    SignalComponent,
    HighlightComponent,
  ],
  templateUrl: './example3.component.html',
  styleUrl: './example3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example3Component {
  protected highlightComponent = inject(HighlightComponent);

}
