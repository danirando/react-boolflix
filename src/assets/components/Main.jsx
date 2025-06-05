export default function Main({ results }) {
  const languageToCountry = {
    en: "GB",
    it: "IT",
    fr: "FR",
    es: "ES",
    de: "DE",
    ja: "JP",
    ko: "KR",
    zh: "CN",
  };
  return (
    <>
      {results.map((res) => {
        const lang = res.original_language?.toLowerCase();
        const countryCode = languageToCountry[lang] || null;
        const isMovie = res.title !== undefined;

        return (
          <div key={res.id} className="container">
            <ul>
              <li>
                <h1>{isMovie ? res.title : res.name}</h1>
                <img
                  src={`https://image.tmdb.org/t/p/w154/${res.poster_path}`}
                  alt=""
                />
                <h2>
                  Titolo Originale:{" "}
                  {isMovie ? res.original_title : res.original_name}
                </h2>
                <img
                  className="flag"
                  src={`https://flagsapi.com/${countryCode}/flat/24.png`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/Flag_of_the_Rest_of_the_World_(Eurovision).svg.png";
                  }}
                  alt={`${countryCode} flag`}
                  width="24"
                  height="16"
                  style={{ objectFit: "contain", verticalAlign: "middle" }}
                />
                <p>Voto: {res.vote_average}</p>
                <p>Tipo: {isMovie ? "Film" : "Serie TV"}</p>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
