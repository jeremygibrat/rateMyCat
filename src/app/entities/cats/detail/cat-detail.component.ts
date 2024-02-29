import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ICat } from '../cat.model';

@Component({
  selector: 'app-cat-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cat-detail.component.html',
  styleUrl: './cat-detail.component.scss'
})
export class CatDetailComponent {
  @Input() cat: ICat | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}
}
