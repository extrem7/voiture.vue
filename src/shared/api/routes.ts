export const api = {
  categories: () => '/categories',
  models: (id: number, idMarks: number) =>
    `/categories/${id}/marks/${idMarks}/models`,
  modelGroups: (id: number, idMarks: number) =>
    `/categories/${id}/marks/${idMarks}/models/_group`,
}
