import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  signal,
  Signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { HighlightComponent } from '../../shared/highlight/highlight.component';

@Component({
  selector: 'app-example2',
  imports: [],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example2Component implements OnInit {
  protected highlightComponent = inject(HighlightComponent);
  private destroyRef = inject(DestroyRef);

  private blockNoopRef: Signal<ElementRef<HTMLElement>> = viewChild.required('blockNoop')
  private blockRef: Signal<ElementRef<HTMLElement>> = viewChild.required('block')
  protected templateEventIndex = signal<number>(0);
  protected rxjsEventIndex = signal<number>(0);

  ngOnInit(): void {
    fromEvent(this.blockNoopRef().nativeElement, 'mousemove').pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {
      this.noop();
    });

    fromEvent(this.blockRef().nativeElement, 'mousemove').pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {
      this.rxjsEventIndex.update((value: number) => value + 1);
    });
  }

  protected noop(): void {}

  protected incTemplateEventIndex(): void {
    this.templateEventIndex.update((value: number) => value + 1);
  }

}
