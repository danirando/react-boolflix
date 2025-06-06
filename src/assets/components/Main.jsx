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

  const renderStars = (vote) => {
    const rating = Math.round(vote / 2); // Da 1–10 a 1–5
    const maxStars = 5;

    return (
      <>
        {[...Array(maxStars)].map((_, index) =>
          index < rating ? (
            <FaStar key={index} color="gold" />
          ) : (
            <FaRegStar key={index} color="gray" />
          )
        )}
      </>
    );
  };
  return (
    <div className="container">
      <div className="row">
        {results.map((res) => {
          const lang = res.original_language?.toLowerCase();
          const countryCode = languageToCountry[lang] || null;
          const isMovie = res.title !== undefined;
          const rating = Math.round(res.vote_average / 2);
          const maxStars = 5;

          return (
            <div key={res.id} className="col-4 mb-4">
              <div className="card-wrapper h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w342/${res.poster_path}`}
                  alt={isMovie ? res.title : res.name}
                  className="poster-img"
                />
                <div className="card-overlay">
                  <h5>{isMovie ? res.title : res.name}</h5>
                  <p>
                    Titolo Originale:{" "}
                    {isMovie ? res.original_title : res.original_name}
                  </p>
                  <p>Lingua: {lang.toUpperCase()}</p>
                  <p>
                    Voto: {"⭐".repeat(rating)}
                    {"☆".repeat(maxStars - rating)}
                  </p>
                  <p>Tipo: {isMovie ? "Film" : "Serie TV"}</p>
                  {countryCode && (
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
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
