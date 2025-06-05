import axios from "axios";
import { useState } from "react"

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY



export default function Header () {

const [searchedWord, setSearchedWord] = useState("")
const [formData, setFormData] = useState("")

const handleFormSubmit =(e) => {
    e.preventDefault();
    setFormData({ ...formData, search: searchedWord })
    const filmApiCall = (searchedWord) => {
    axios.get(`${apiUrl}?api_key=${apiKey}&query=${searchedWord}`).then(res =>console.log(res)
    )
}

filmApiCall(searchedWord)
  return(searchedWord);
}




    return (<>
    <form onSubmit={handleFormSubmit}>
        <input value={searchedWord} onChange={(e) => setSearchedWord (e.target.value)} type="text" />
        <button>Cerca</button>
    </form>
    </>)
}