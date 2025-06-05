export default function Main({ results }) {
  return (
    <>
      {results.map((res) => (
        <div key={res.id} className="continer">
          <ul>
            <li>
              <h1>{res.title}</h1>
              <h2>Titolo Originale: {res.original_title}</h2>
              <h3>Lingua: {res.original_language}</h3>
              <p>Voto: {res.vote_average}</p>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
