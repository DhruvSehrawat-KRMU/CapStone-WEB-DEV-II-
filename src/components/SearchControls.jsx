import { SORT_OPTIONS } from "./countryHelpers";

function SearchControls({
  searchTerm,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  regions,
  sortBy,
  onSortChange,
}) {
  return (
    <section className="mb-6 grid gap-3 rounded-2xl border border-cyan-100 bg-white/85 p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-3 dark:border-slate-700 dark:bg-slate-800/80">
      
      <label className="flex flex-col gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
        Search Country
        <input
          type="text"
          placeholder="Type country name..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
        Filter Region
        <select
          value={selectedRegion}
          onChange={(event) => onRegionChange(event.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        >
          <option value="">All Regions</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
        Sort By
        <select
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        >
          <option value={SORT_OPTIONS.NAME_ASC}>Name (A-Z)</option>
          <option value={SORT_OPTIONS.NAME_DESC}>Name (Z-A)</option>
          <option value={SORT_OPTIONS.POPULATION_ASC}>
            Population (Low to High)
          </option>
          <option value={SORT_OPTIONS.POPULATION_DESC}>
            Population (High to Low)
          </option>
        </select>
      </label>

    </section>
  );
}

export default SearchControls;