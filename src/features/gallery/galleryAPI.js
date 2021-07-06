export function fetchImages({ limit, cat_id, page }) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${cat_id}`,
  ).then((res) => res.json());
}
