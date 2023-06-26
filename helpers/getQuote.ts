export const fetchQuote = () =>
  fetch("https://api.quotable.io/random").then((res) => res.json());
