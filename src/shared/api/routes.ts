export const api = {
  categories: () => '/api/categories',
  models: (id: number, idMarks: number) =>
    `/api/categories/${id}/marks/${idMarks}/models`,
  marks: (id: number) => `/api/categories/${id}/marks`,
  body: (id: number) => `/api/categories/${id}/bodystyles`,
  popular: (id: number) =>
    `/demo/bu/mainPage/categories/popularBrands?id=${id}`,
}
