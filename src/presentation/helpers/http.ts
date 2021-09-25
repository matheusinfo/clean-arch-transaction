import { HttpResponse } from '@/presentation/protocols'

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
})

export const serverError = (error: string | Error): HttpResponse => ({
  statusCode: 500,
  body: error,
})

