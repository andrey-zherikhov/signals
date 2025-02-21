import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { HighlightComponent } from '../../shared/highlight/highlight.component';

@Component({
  selector: 'app-example4',
  imports: [],
  templateUrl: './example4.component.html',
  styleUrl: './example4.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example4Component {
  protected highlightComponent = inject(HighlightComponent);
  private cd = inject(ChangeDetectorRef);

  triggerMarkForCheck(): void {
    this.cd.markForCheck();
    this.cd.markForCheck();
    this.cd.markForCheck();
    this.cd.markForCheck();
  }

  triggerDetectChanges(): void {
    this.cd.detectChanges();
    this.cd.detectChanges();
    this.cd.detectChanges();
    this.cd.detectChanges();
  }

}
