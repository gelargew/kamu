interface BaseResponse<T> {
  message: string;
  data: T
}

interface BaseErrorResponse {
  message: string
  errors?: any
}