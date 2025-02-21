import { Routes } from '@angular/router';
import { Example1Component } from './examples/example1/example1.component';
import { Example2Component } from './examples/example2/example2.component';
import { Example3Component } from './examples/example3/example3.component';
import { Example4Component } from './examples/example4/example4.component';

export const routes: Routes = [
  {
    path: '1',
    component: Example1Component,
  },
  {
    path: '2',
    component: Example2Component,
  },
  {
    path: '3',
    component: Example3Component,
  },
  {
    path: '4',
    component: Example4Component,
    data: {
      showCounter: true,
    }
  },
  {
    path: '**',
    redirectTo: '1',
  }
];
