export const getQueryFromObj = queryObj =>
  Object.entries(queryObj).reduce(
    (acc, query, index, arr) =>
      `${acc}${query[0]}=${query[1]}${index === arr.length - 1 ? '' : '&'}`,
    '?',
  );
