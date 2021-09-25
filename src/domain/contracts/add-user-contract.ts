export interface AddUserContract {
  add: (params: AddUserContract.Params) => Promise<AddUserContract.Result>
}

export namespace AddUserContract {
  export type Params = {
    name: string
    email: string
    password: string
  }

  export type Result = {
    id: number
    name: string
    email: string
  }
}
