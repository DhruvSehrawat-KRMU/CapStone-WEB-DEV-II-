function CountryCard({ country }) {

  let capital = "N/A";
  if (country.capital && country.capital.length > 0) {
    capital = country.capital[0];
  }

  return (
    <article className="card">
      <img
        src={country.flags && country.flags.svg ? country.flags.svg : country.flags.png}
        alt="flag"
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3>{country.name.common}</h3>

        <p><b>Capital:</b> {capital}</p>

        <p><b>Region:</b> {country.region ? country.region : "N/A"}</p>

        <p>
          <b>Population:</b> {country.population.toLocaleString()}
        </p>

      </div>
    </article>
  );
}

export default CountryCard;