import PagedResponse from "../models/PagedResponse";

export const mockResponsePage: <T>(data: T[]) => PagedResponse<T> = (data) => ({
  page: 1,
  total_pages: 1,
  total_results: data.length,
  results: data,
});
