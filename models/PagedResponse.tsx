export default interface PagedResponse<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}
