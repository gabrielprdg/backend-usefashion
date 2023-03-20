export interface DeleteOrderById {
  delete: (id: string) => Promise<void>
}
