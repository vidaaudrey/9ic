export function getLevelByPopularity(popularity) {
  return Math.ceil(popularity / 20)
}

export function getQueryStringByString(queryString) {
  return encodeURIComponent(queryString)
}
