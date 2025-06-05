import axios from "axios";
import { useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Header({ onResults }) {
  const [searchedWord, setSearchedWord] = useState("");
  const [formData, setFormData] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, search: searchedWord });

    try {
      const [filmRes, seriesRes] = await Promise.all([
        axios.get(
          `${apiUrl}?api_key=${apiKey}&query=${searchedWord}&language=it-IT`
        ),
        axios.get(
          `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchedWord}&language=it`
        ),
      ]);

      const combinedResults = [
        ...filmRes.data.results,
        ...seriesRes.data.results,
      ];
      onResults(combinedResults);
    } catch (err) {
      console.error("Errore nella ricerca:", err);
    }
  };

  return (
    <>
      <form className="d-flex gap-3" onSubmit={handleFormSubmit}>
        <input
          className="form-control"
          value={searchedWord}
          onChange={(e) => setSearchedWord(e.target.value)}
          type="text"
        />
        <button className="btn btn-secondary">Cerca</button>
      </form>
    </>
  );
}
