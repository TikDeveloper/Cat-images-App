export function fetchImages({ limit, cat_id }) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=5&category_ids=${cat_id}`,
  ).then((res) => res.json());
}
