import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { IComment } from '../comment.model';
import { CommentsService, EntityArrayResponseType } from '../services/comments.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss'
})
export class CommentsListComponent {
  isLoading = false;
  comment?: IComment[];
  displayedColumns: string[] = ['text', 'note'];

  constructor(
    protected commentsService: CommentsService,
/*     protected activatedRoute: ActivatedRoute,
    public router: Router,
    protected modalService: NgbModal, */
  ) {}

  ngOnInit(): void {
    this.load();
  }


  load(): void {
    this.commentsService.query().pipe(tap(() => (this.isLoading = false))).subscribe({
      next: (res: EntityArrayResponseType) => {
        this.onResponseSuccess(res);
      },
    });
  }

  protected onResponseSuccess(response: EntityArrayResponseType): void {
    // this.fillComponentAttributesFromResponseHeader(response.headers);
    // const dataFromBody = this.fillComponentAttributesFromResponseBody(response.body);
    this.comment = response.body ?? [];
  }
}
