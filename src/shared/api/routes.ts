export const api = {
  categories: () => '/categories',
  models: (id: number, idMarks: number) =>
    `/categories/${id}/marks/${idMarks}/models`,
  marks: (id: number) => `/categories/${id}/marks`,
  body: (id: number) => `/categories/${id}/bodystyles`,
  popular: (id: number) => `categories/popularBrands?id=${id}`,
}
