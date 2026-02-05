// Common Pagination interface
export interface Pagination {
  count: number;
  num_pages: number;
  current_page: number;
  has_next: boolean;
  has_previous: boolean;
  page_size: number;
  next_page: number | null;
  previous_page: number | null;
}

// Form field errors structure
export interface FormErrors {
  [fieldName: string]: string | string[] | FormErrors;
}

// Generic API Response type with success, data, message, pagination, and error
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  pagination: Pagination | null;
  error: null | FormErrors | string;
}
