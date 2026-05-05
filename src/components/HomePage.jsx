import { useEffect, useState } from "react";
import SearchControls from "./SearchControls";
import CountryCard from "./CountryCard";
import PaginationControls from "./PaginationControls";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import { getAllCountries } from "./countries";
import { applyFiltersAndSort, getUniqueRegions } from "./countryHelpers";
import { paginate } from "./pagination";

export default function HomePage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [sortBy, setSortBy] = useState("name_asc");

  const [page, setPage] = useState(1);
  const perPage = 24;

  // fetch data
  useEffect(() => {
    setLoading(true);
    setError(null);

    getAllCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        setError(err.message || "Failed to load");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // get regions
  const regions = getUniqueRegions(countries);

  // filter + sort
  const filtered = applyFiltersAndSort(countries, {
    searchTerm,
    region: selectedRegion,
    sortBy,
  });

  // pagination
  const { pageItems, totalPages } = paginate(filtered, page, perPage);

  // reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedRegion, sortBy]);

  if (loading) return <LoadingState text="Loading countries..." />;
  if (error) return <ErrorState message={error} onRetry={() => window.location.reload()} />;

  return (
    <main>
      <SearchControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        regions={regions}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {pageItems.length === 0 ? (
        <p>No countries found</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pageItems.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}

      <PaginationControls
        page={page}
        totalPages={totalPages}
        onPrevious={() => setPage(page - 1)}
        onNext={() => setPage(page + 1)}
      />
    </main>
  );
}