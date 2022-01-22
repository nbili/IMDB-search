import { useEffect } from "react";
import { searchMovie, IMDBForm, IMDBDataView } from "./IMDB";

function IMDBInfo() {
  useEffect(() => {
    searchMovie({ query: "蜘蛛侠" })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="imdb-info">
      <IMDBDataView />
    </div>
  );
}

function IMDB() {
  return (
    <div className="imdb">
      <IMDBForm />
      <IMDBInfo />
    </div>
  );
}

function App() {
  return (
    <>
      <IMDB />
    </>
  );
}

export default App;
