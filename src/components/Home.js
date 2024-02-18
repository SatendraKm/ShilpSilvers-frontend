import React from "react";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";

const Home = () => {
  const Product = [
    {
      image:
        "https://lh3.googleusercontent.com/proxy/8E88GzoF8TtTBtfssMjJue8F5qvLw3edQzwqYvAXkABH_uGG0H6icpHltyNvjRDPDifhqEEge3Ox0xuTm8oIuswMMOhKf96TDs59fXkqdhQco2hLHZiH",
      name: "Diya",
      cost: "200",
    },
    {
      image:
        "https://lh3.googleusercontent.com/proxy/8E88GzoF8TtTBtfssMjJue8F5qvLw3edQzwqYvAXkABH_uGG0H6icpHltyNvjRDPDifhqEEge3Ox0xuTm8oIuswMMOhKf96TDs59fXkqdhQco2hLHZiH",
      name: "Diya",
      cost: "200",
    },
    {
      image:
        "https://lh3.googleusercontent.com/proxy/8E88GzoF8TtTBtfssMjJue8F5qvLw3edQzwqYvAXkABH_uGG0H6icpHltyNvjRDPDifhqEEge3Ox0xuTm8oIuswMMOhKf96TDs59fXkqdhQco2hLHZiH",
      name: "Diya",
      cost: "200",
    },
    {
      image:
        "https://lh3.googleusercontent.com/proxy/8E88GzoF8TtTBtfssMjJue8F5qvLw3edQzwqYvAXkABH_uGG0H6icpHltyNvjRDPDifhqEEge3Ox0xuTm8oIuswMMOhKf96TDs59fXkqdhQco2hLHZiH",
      name: "Diya",
      cost: "200",
    },
    {
      image:
        "https://lh3.googleusercontent.com/proxy/8E88GzoF8TtTBtfssMjJue8F5qvLw3edQzwqYvAXkABH_uGG0H6icpHltyNvjRDPDifhqEEge3Ox0xuTm8oIuswMMOhKf96TDs59fXkqdhQco2hLHZiH",
      name: "Diya",
      cost: "200",
    },
  ];
  return (
    <div>
      <div>{<Carousel />}</div>
      <div className="flex justify-between p-4">
        <div>
          <button
            type="button"
            className="mx-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            All Products
          </button>
          <button
            // onClick={() => {
            //   const FilteredList = ListOfRestaurant.filter(
            //     (res) => res.info.avgRating > 4.3
            //   );
            //   setFilteredRestaurant(FilteredList);
            // }}
            type="button"
            className="mx-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Top Rated Products
          </button>
        </div>
        <div className="mx-4 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          <h2>rest of the filters to be created here</h2>
        </div>
      </div>

      {/* {restaurant.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )} */}
      <div className="flex flex-wrap">
        {Product.map((p, i) => (
          <ProductCard key={i} cardData={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
