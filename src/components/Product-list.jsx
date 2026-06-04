import ProductCard from "./Product-card";
import { useProducts } from "../context/ProductContext";
import { useProductFilter } from "../context/ProductFilterContext";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  const { searchTerm, category } = useProductFilter();

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <p className="text-center py-10 text-gray-500">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center py-10 text-red-500">
        {error}
      </p>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-12 lg:px-20">

      {/* No Products Found */}
      {filteredProducts.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            No products found
          </h2>
          <p className="mt-2 text-gray-500">
            Try changing your search or category filter
          </p>
        </div>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      )}

    </div>
  );
};

export default ProductList;