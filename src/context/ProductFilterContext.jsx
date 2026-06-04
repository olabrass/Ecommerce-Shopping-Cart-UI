import { createContext, useContext, useState } from "react";

const ProductFilterContext = createContext();

export const ProductFilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  return (
    <ProductFilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        category,
        setCategory,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};

export const useProductFilter = () => {
  return useContext(ProductFilterContext);
};