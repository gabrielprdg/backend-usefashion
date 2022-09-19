export interface DeleteProductById {
  delete (id: string): Promise<void>
}
