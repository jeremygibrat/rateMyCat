// import dayjs from 'dayjs/esm';

export interface IComment {
  id: number;
/*   created?: dayjs.Dayjs | null;
  modified?: dayjs.Dayjs | null; */
  text?: string | null;
  note?: number | null;
  cat: number
}

export type NewComment = Omit<IComment, 'id'> & { id: null };
