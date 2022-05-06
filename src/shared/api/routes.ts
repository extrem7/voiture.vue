export const api = {
  categories: () => '/categories',
  marks: (id: number) => `/categories/${id}/marks`,
  models: (id: number, idMarks: number) =>
    `/categories/${id}/marks/${idMarks}/models`,
  modelGroups: (id: number, idMarks: number) =>
    `/categories/${id}/marks/${idMarks}/models/_group`,
}
