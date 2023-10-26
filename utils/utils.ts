export const getPageParams = (page?: number | string) => {
  let pageNumber = 1;
  if (page) {
    pageNumber = typeof page === "string" ? parseInt(page) : page;
  }

  return {
    page: pageNumber,
  };
};
