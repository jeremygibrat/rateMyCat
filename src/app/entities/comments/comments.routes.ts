import { Routes } from "@angular/router";
import { CommentDetailComponent } from "./detail/comment-detail.component";
import { CommentUpdateComponent } from "./update/comment-update.component";
import { CommentsListComponent } from "./list/comments-list.component";
import CommentsResolve from './services/comments-routing-resolve.service';

const commentsRoute: Routes = [
    {
      path: '',
      component: CommentsListComponent,
      data: {
        defaultSort: 'id',
      },
    },
    {
      path: ':id/view',
      component: CommentDetailComponent,
      resolve: {
        comment: CommentsResolve,
      },
    },
    {
      path: 'new',
      component: CommentUpdateComponent,
      resolve: {
        comment: CommentsResolve,
      },
    },
    {
      path: ':id/edit',
      component: CommentUpdateComponent,
      resolve: {
        comment: CommentsResolve,
      },
    },
  ];
  
  export default commentsRoute;
  