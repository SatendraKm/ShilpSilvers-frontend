import React from "react";

const CategoryComponent = () => {
  const categories = [
    { name: "Jewellery", image: "https://example.com/jewellery.jpg" },
    { name: "Home & Living", image: "https://example.com/home-living.jpg" },
    {
      name: "Art & Collectibles",
      image: "https://example.com/art-collectibles.jpg",
    },
    { name: "Clothing", image: "https://example.com/clothing.jpg" },
    { name: "Baby", image: "https://example.com/baby.jpg" },
    { name: "Weddings", image: "https://example.com/weddings.jpg" },
    { name: "Accessories", image: "https://example.com/accessories.jpg" },
    {
      name: "Craft Supplies & Tools",
      image: "https://example.com/craft-supplies.jpg",
    },
    {
      name: "Electronics & Accessories",
      image: "https://example.com/electronics.jpg",
    },
    { name: "Bags & Purses", image: "https://example.com/bags-purses.jpg" },
    { name: "Bath & Beauty", image: "https://example.com/bath-beauty.jpg" },
    {
      name: "Books, Films & Music",
      image: "https://example.com/books-films-music.jpg",
    },
    // Add more categories as needed
  ];

  const visibleCategories = categories.slice(0, 12);
  const hiddenCategories = categories.slice(12);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center underline underline-offset-8 text-gray-900">
          Shop by Category
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {visibleCategories.map((category, index) => (
            <div key={index} className="group relative">
              <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{category.name}</h3>
            </div>
          ))}
        </div>
        {hiddenCategories.length > 0 && (
          <div className="mt-8 text-center">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Show more ({hiddenCategories.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryComponent;
