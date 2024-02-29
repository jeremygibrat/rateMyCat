export interface PageResponse<T>{
  count: number,
  next: number,
  previous: number,
  results: T
}