/* import dayjs from 'dayjs/esm';
import { IComments } from 'app/entities/comments/comments.model'; */

import { IComment } from "../comments/comment.model";

export interface ICat {
  id: number;
  name?: string | null;
  breed?: string | null;
  description?: string | null;
  //birthday?: dayjs.Dayjs | null;
  avg_rating?: number | null;
  comments?: IComment[] | null;
}

export type NewCat = Omit<ICat, 'id'> & { id: null };

