export default function Main({ results }) {
  const supportedFlags = ["GB", "IT", "FR", "ES", "DE"];
  return (
    <>
      {results.map((res) => {
        const lang = res.original_language?.toLowerCase();
        const countryCode = lang === "en" ? "gb" : lang;
        return (
          <div key={res.id} className="container">
            <ul>
              <li>
                <h1>{res.title}</h1>
                <h2>Titolo Originale: {res.original_title}</h2>
                <img
                  src={`https://flagsapi.com/${countryCode.toUpperCase()}/flat/64.png`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/fallback.png";
                  }}
                  alt={`${countryCode} flag`}
                />
                <p>Voto: {res.vote_average}</p>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
