import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  Renderer2,
  Signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { asapScheduler, concatMap, Observable, reduce, Subject, throttleTime, timer, windowToggle } from 'rxjs';

const animationTime = 1000;

@Component({
  selector: 'app-highlight',
  imports: [],
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightComponent {
  private renderer = inject(Renderer2);
  private hostEl = inject(ElementRef).nativeElement;

  showCounter = input<boolean>(false);

  private counterRef: Signal<ElementRef<HTMLElement>> = viewChild.required('counter');

  private cd$$ = new Subject<void>();
  private open$: Observable<void> = this.cd$$.pipe(throttleTime(0, asapScheduler, { leading: true, trailing: false }));
  private closeCb$: () => Observable<number> = () => timer(0, asapScheduler);
  protected cdCounter = toSignal(this.cd$$.pipe(
    windowToggle(this.open$, this.closeCb$),
    concatMap((window$: Observable<void>) => window$.pipe(
      reduce((count: number) => count + 1, 0),
    )),
  ));

  highlight(): '' {
    this.cd$$.next();
    requestAnimationFrame(() => {
      this.initAnimation();

      requestAnimationFrame(() => {
        this.startAnimation();
      });
    })

    return '';
  }

  private initAnimation(): void {
    this.renderer.removeStyle(this.hostEl, 'transition');
    this.renderer.setStyle(this.hostEl, 'background-color', 'rgba(115, 170, 255, .5)');

    this.renderer.removeStyle(this.counterRef().nativeElement, 'transition');
    this.renderer.setStyle(this.counterRef().nativeElement, 'opacity', 1);
  }

  private startAnimation(): void {
    this.renderer.setStyle(this.hostEl, 'transition', `background-color ${animationTime}ms`);
    this.renderer.removeStyle(this.hostEl, 'background-color');

    this.renderer.setStyle(this.counterRef().nativeElement, 'transition', `opacity ${animationTime}ms`);
    this.renderer.removeStyle(this.counterRef().nativeElement, 'opacity');
  }
}
