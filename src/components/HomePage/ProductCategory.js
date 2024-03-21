import ProductCategoryData from "../../utils/ProductCategoryData";
import React, { useState } from "react";

const ProductCategory = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const categories = ProductCategoryData;

  return (
    <div className="justify-center my-8">
      <h1 className="text-center text-4xl font-light font-serif mb-6">
        Shop on-sale decor and so much more!
      </h1>
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer items-center mx-4 mb-8"
            onMouseEnter={() => setHoveredCategory(category.name)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <img
              src={category.imageSrc}
              alt={category.name}
              className={`w-32 h-32 rounded-full object-cover mb-2 transition-transform duration-300 ${
                hoveredCategory === category.name ? "transform scale-110" : ""
              }`}
            />
            <span
              className={`text-lg text-center ${
                hoveredCategory === category.name
                  ? "underline underline-offset-8"
                  : ""
              }`}
            >
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
