const BASE = "https://restcountries.com/v3.1";

// get all countries
export async function getAllCountries() {
  let url = BASE + "/all?fields=name,cca3,flags,capital,region,population";

  let res = await fetch(url);
  let data = await res.json();

  return data;
}

// get one country
export async function getCountryByCode(code) {
  let url = BASE + "/alpha/" + code;

  let res = await fetch(url);
  let data = await res.json();

  return data[0];
}