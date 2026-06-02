import ProductCard from "./Product-card";
import { useProducts } from "../context/ProductContext";

const ProductList = () => {
    const {products, loading, error} = useProducts();
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-12 lg:px-20">

        {loading && <p>Loading...</p>}
        {error && <div className="error"> {error} </div>}

        {products.map((product) => (

        <ProductCard  key={product.id}  product={product} />
          
        ))}
      </div>
    )
}

export default ProductList;