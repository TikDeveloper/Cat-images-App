export function fetchCategories() {
  return fetch('https://api.thecatapi.com/v1/categories ').then((res) =>
    res.json(),
  );
}
