/**
 * @param {Object} queryParamsData
 */
export const getQueryParams = (queryParamsData) => {
  let queryParams = '';
  for (const [key, value] of Object.entries(queryParamsData)) {
    if (!value) continue;
    else queryParams += `&${key}=${encodeURI(value)}`;
  }
  if (queryParams) queryParams = queryParams.replace('&', '?');
  return queryParams;
};

/**
 * @param {Array} queryParamsData
 */
export const getDashQueryParams = (queryParamsData = []) => {
  let queryParams = '';
  queryParamsData.forEach((queryParamData) => {
    if (queryParamData) queryParams += queryParamData + '/';
  });
  return queryParams;
};
