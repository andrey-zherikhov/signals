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

  private blockNoopRef: Signal<ElementRef<HTMLElement>> = viewChild.required('blockNoop');
  private blockRef: Signal<ElementRef<HTMLElement>> = viewChild.required('block');
  private propertyBlockRef: Signal<ElementRef<HTMLElement>> = viewChild.required('propertyBlock');

  protected templateEventIndexSignal = signal<number>(0);
  protected rxjsEventIndexSignal = signal<number>(0);
  protected templateEventIndexProperty: number = 0;
  protected rxjsEventIndexProperty: number = 0;

  ngOnInit(): void {
    fromEvent(this.blockNoopRef().nativeElement, 'mousemove').pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {
      this.noop();
    });

    fromEvent(this.blockRef().nativeElement, 'mousemove').pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {
      this.rxjsEventIndexSignal.update((value: number) => value + 1);
    });

    fromEvent(this.propertyBlockRef().nativeElement, 'mousemove').pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {
      this.rxjsEventIndexProperty = this.rxjsEventIndexProperty + 1;
    });
  }

  protected noop(): void {}

  protected incTemplateEventIndexSignal(): void {
    this.templateEventIndexSignal.update((value: number) => value + 1);
  }

  protected incTemplateEventIndexProperty(): void {
    this.templateEventIndexProperty = this.templateEventIndexProperty + 1;
  }

}
