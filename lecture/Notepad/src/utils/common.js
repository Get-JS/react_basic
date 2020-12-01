export function currentPageToOffset({ db, currentPage, pageSize }) {
  const offset = db === 'oracle' ? currentPage * pageSize : (currentPage - 1) * pageSize;
  return offset;
}

export function offsetToCurrentPage({ offset, pageSize }) {
  const currentPage = offset && pageSize ? parseInt(offset / pageSize) + 1 : 1;
  return currentPage;
}

export function currentPageToLast({ currentPage, pageSize }) {
  const last = pageSize * currentPage;
  return last;
}
