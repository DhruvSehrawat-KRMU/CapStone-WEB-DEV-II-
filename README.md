# Travel Explorer - Search, Discover & Filter Destinations

A React (Vite) app that uses the REST Countries API to search, filter, sort, and browse country details with pagination and dark mode.

## Tech Stack

- React + Vite (JavaScript)
- Fetch API (no Axios)
- Tailwind CSS
- React Router

## How To Run

1. Open terminal in this folder:

```bash
cd travel-explorer
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open the URL shown in terminal (usually `http://localhost:5173`).

## Build For Production

```bash
npm run build
npm run preview
```

## SOP Requirement Mapping

1. Search by name (real-time):
	- Implemented in `HomePage` with `searchTerm` state and live filtering.

2. Filter by region:
	- Implemented in `HomePage` using region dropdown + utility filtering.

3. Sort by name and population:
	- Implemented in `HomePage` with sort dropdown and utility sorter.

4. Pagination:
	- Implemented in `HomePage` + `PaginationControls` (8 cards per page).

5. Dark mode toggle:
	- Implemented in `App` + `ThemeToggle`, persisted with `localStorage`.

6. Routing (2 pages minimum):
	- `/` for country list (home), `/country/:code` for country details.

7. Lazy loading:
	- `React.lazy` + `Suspense` used in `App` for page components.

8. Error handling + loading states:
	- Implemented in `HomePage` and `CountryDetailsPage` with `LoadingState` and `ErrorState` components.

## Project Structure

```text
src/
  components/
  pages/
  services/
  utils/
```
