import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PageResponse } from '../../../core/request/page-response.model';
import { IComment, NewComment } from '../comment.model';

export type EntityResponseType = HttpResponse<IComment>;
export type EntityArrayResponseType = HttpResponse<IComment[]>;
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  protected resourceUrl = '/api/v1/comments';

  constructor(protected http: HttpClient) { }
  
  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IComment>(`${this.resourceUrl}/${id}/`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    // const options = createRequestOption(req);
    const options = {};
    return this.http
      .get<PageResponse<IComment[]>>(`${this.resourceUrl}/`, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  protected convertDateFromServer(restComment: IComment): IComment {
    return {
      ...restComment,
      // birthday: restCats.birthday ? dayjs(restCats.birthday) : undefined,
    };
  }
  protected convertResponseFromServer(res: HttpResponse<IComment | NewComment>): HttpResponse<IComment> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body as IComment) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<PageResponse<IComment[]>>): HttpResponse<IComment[]> {
    return res.clone({
      body: res.body?.results ? res.body.results.map(item => this.convertDateFromServer(item)) : null,
    });
  }

}
