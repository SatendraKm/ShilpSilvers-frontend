import CategoryComponent from "./CategoryComponent";
import CategoryPreview from "./CategoryPreview";
import ProductCategory from "./ProductCategory";
import TopPicks from "./TopPicks";
import React from "react";

const Home = () => {
  return (
    <div>
      <ProductCategory />
      <CategoryComponent />
      <CategoryPreview />
      <TopPicks />
    </div>
  );
};

export default Home;
