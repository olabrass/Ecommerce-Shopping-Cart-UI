import { useProductFilter } from "../context/ProductFilterContext";

const SearchBar = () => {
  const {
    searchTerm,
    setSearchTerm
  } = useProductFilter();

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full rounded-xl border px-4 py-3"
    />
  );
};

export default SearchBar;