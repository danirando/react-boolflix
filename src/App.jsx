import { useState } from "react";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";


export default function App() {
  const [results, setResults] = useState([]);
  return (
    <>
   <Header onResults={setResults} />
    <Main results={results} />
    </>
  );
}
