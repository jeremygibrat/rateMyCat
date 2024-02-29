import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICat, NewCat } from '../cat.model';
import { map, Observable } from 'rxjs';
import { PageResponse } from '../../../core/request/page-response.model';

export type EntityResponseType = HttpResponse<ICat>;
export type EntityArrayResponseType = HttpResponse<ICat[]>;

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  protected resourceUrl = '/api/v1/cats';

  constructor(protected http: HttpClient) { }

  create(cat: NewCat): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(cat);
    // delete copy.avg_rating;
    return this.http.post<NewCat>(`${this.resourceUrl}/`, copy, { observe: 'response' })
    .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(cat: ICat): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(cat);
    return this.http
      .put<ICat>(`${this.resourceUrl}/${cat.id}/`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICat>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    // const options = createRequestOption(req);
    const options = {};
    return this.http
      .get<PageResponse<ICat[]>>(`${this.resourceUrl}/`, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  protected convertDateFromClient<T extends ICat | NewCat>(cat: T): T {
    return {
      ...cat,
      //birthday: cat.birthday?.format('YYYY-MM-DD') ?? null,
    };
  }
  
  protected convertDateFromServer(restCat: ICat): ICat {
    return {
      ...restCat,
      // birthday: restCats.birthday ? dayjs(restCats.birthday) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<ICat | NewCat>): HttpResponse<ICat> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body as ICat) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<PageResponse<ICat[]>>): HttpResponse<ICat[]> {
    return res.clone({
      body: res.body?.results ? res.body.results.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
