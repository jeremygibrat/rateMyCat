import { Routes } from '@angular/router';

import { CatListComponent } from './list/cats-list.component';
import { CatDetailComponent } from './detail/cat-detail.component';
import { CatUpdateComponent } from './update/cat-update.component';
import CatsResolve from './services/cats-routing-resolve.service';

const catsRoute: Routes = [
  {
    path: '',
    component: CatListComponent,
    data: {
      defaultSort: 'id',
    },
  },
  {
    path: ':id/view',
    component: CatDetailComponent,
    resolve: {
      cat: CatsResolve,
    },
  },
  {
    path: 'new',
    component: CatUpdateComponent,
    resolve: {
      cat: CatsResolve,
    },
  },
  {
    path: ':id/edit',
    component: CatUpdateComponent,
    resolve: {
      cat: CatsResolve,
    },
  },
];

export default catsRoute;
