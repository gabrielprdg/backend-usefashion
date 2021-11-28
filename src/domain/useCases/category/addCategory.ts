export type AddCategoryParams = {
  name: string
  createdAt: Date
}

export interface AddCategory {
  add: (addCategoryParams: AddCategoryParams) => Promise<void>
}
