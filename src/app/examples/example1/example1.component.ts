import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HighlightComponent } from '../../shared/highlight/highlight.component';

@Component({
  selector: 'app-example1',
  imports: [],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example1Component {
  protected highlightComponent = inject(HighlightComponent);

  protected noop(): void {}

}
