import React from "react";

const KEY = process.env.REACT_APP_IMDB_KEY as string;

type SearchQuery = {
  query: string;
  language?: "en-US" | "zh";
  api_key?: string;
};

function searchMovie({ query, language = "zh", api_key = KEY }: SearchQuery) {
  return window
    .fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=${language}&query=${query}&year=2021`
    )
    .then(async (response) => {
      const { results, status_message } = await response.json();

      if (response.ok) {
        const movie = results[0];
        return movie;
      } else {
        const error = { message: status_message };
        return Promise.reject(error);
      }
    });
}

function IMDBForm() {
  return <form className="imdb-form">form</form>;
}

function IMDBDataView() {
  return <div className="imdb-data-view">IMDB View</div>;
}

export { searchMovie, IMDBForm, IMDBDataView };
