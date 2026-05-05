// keep sort options (simplified)
export const SORT_OPTIONS = {
  NAME_ASC: "name_asc",
  POPULATION_ASC: "population_asc",
};

// simple population format
export function formatPopulation(num) {
  if (num) return num.toLocaleString();
  return "N/A";
}

// get unique regions
export function getUniqueRegions(countries) {
  let regions = [];

  for (let i = 0; i < countries.length; i++) {
    let r = countries[i].region;

    if (r && !regions.includes(r)) {
      regions.push(r);
    }
  }

  return regions;
}

// simple filter + sort (kept same name so app works)
export function applyFiltersAndSort(countries, options) {
  let searchTerm = options.searchTerm || "";
  let region = options.region || "";
  let sortBy = options.sortBy || SORT_OPTIONS.NAME_ASC;

  let result = [];

  // filter
  for (let i = 0; i < countries.length; i++) {
    let c = countries[i];

    if (region && c.region !== region) continue;

    if (searchTerm) {
      let name = c.name.common.toLowerCase();
      if (!name.includes(searchTerm.toLowerCase())) continue;
    }

    result.push(c);
  }

  // sort
  if (sortBy === SORT_OPTIONS.NAME_ASC) {
    result.sort((a, b) => {
      if (a.name.common > b.name.common) return 1;
      else return -1;
    });
  }

  if (sortBy === SORT_OPTIONS.POPULATION_ASC) {
    result.sort((a, b) => a.population - b.population);
  }

  return result;
}