import { useEffect, useState } from "react";
import { searchMovie, IMDBForm, IMDBDataView } from "./IMDB";

function IMDBInfo() {
  const [info, setInfo] = useState("");

  useEffect(() => {
    searchMovie({ query: "蜘蛛侠" })
      .then((res) => {
        setInfo(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="imdb-info">
      {JSON.stringify(info)}
      <IMDBDataView />
    </div>
  );
}

function IMDB() {
  return (
    <div className="imdb">
      <IMDBForm />
      <hr />
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
