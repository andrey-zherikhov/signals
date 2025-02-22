import { Data, Route, Routes } from '@angular/router';
import { Example1Component } from './examples/example1/example1.component';
import { Example2Component } from './examples/example2/example2.component';
import { Example3Component } from './examples/example3/example3.component';
import { Example4Component } from './examples/example4/example4.component';

export interface PageRoute extends Route {
  data: PageRouteData;
}

export interface PageRouteData extends Data {
  title: string;
  showCounter?: boolean;
}

export const pageRoutes: PageRoute[] = [
  {
    path: '1',
    component: Example1Component,
    data: {
      title: 'Example 1',
    },
  },
  {
    path: '2',
    component: Example2Component,
    data: {
      title: 'Example 2',
    },
  },
  {
    path: '3',
    component: Example3Component,
    data: {
      title: 'Example 3',
    },
  },
  {
    path: '4',
    component: Example4Component,
    data: {
      title: 'Example 4',
      showCounter: true,
    }
  },
]

export const routes: Routes = [
  ...pageRoutes,
  {
    path: '**',
    redirectTo: '1',
  }
];
