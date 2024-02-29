import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cats',
    data: { pageTitle: 'Cats' },
    loadChildren: () => import('./cats/cats.routes'),
  },
  {
    path: 'comments',
    data: { pageTitle: 'Comments' },
    loadChildren: () => import('./comments/comments.routes'),
  },
];

export default routes;
