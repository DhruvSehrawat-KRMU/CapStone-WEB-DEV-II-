export function paginate(list, page, perPage) {

  let total = list.length;

  let totalPages = Math.ceil(total / perPage);
  if (totalPages === 0) {
    totalPages = 1;
  }

  // fix page limits
  if (page < 1) {
    page = 1;
  }
  if (page > totalPages) {
    page = totalPages;
  }

  let start = (page - 1) * perPage;
  let end = start + perPage;

  let pageItems = list.slice(start, end);

  return {
    pageItems: pageItems,
    totalPages: totalPages,
    current: page
  };
}