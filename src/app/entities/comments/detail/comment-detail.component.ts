import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IComment } from '../comment.model';

@Component({
  selector: 'app-comment-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './comment-detail.component.html',
  styleUrl: './comment-detail.component.scss'
})
export class CommentDetailComponent {
  @Input() comment: IComment | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }
}
