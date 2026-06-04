import { useProducts } from "../context/ProductContext";
import { useProductFilter } from "../context/ProductFilterContext";

const CategoryFilter = () => {
  const { products } = useProducts();
  const { category, setCategory } = useProductFilter();

  const categories = [
    ...new Set(products.map((product) => product.category))
  ];

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full rounded-xl border px-4 py-3"
    >
      <option value="">All Categories</option>

      {categories.map((cat) => (
        <option
          key={cat}
          value={cat}
        >
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;