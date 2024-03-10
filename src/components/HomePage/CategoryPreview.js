/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import img1 from "../../utils/images/cards/1.1.jpg";
import img10 from "../../utils/images/cards/10.jpg";
import img16 from "../../utils/images/cards/16.jpg";

const callouts = [
  {
    name: "for the occation of Diwali and Dussheera",
    description: "Silver Diya",
    imageSrc: img10,
    imageAlt: "silver diya",
  },
  {
    name: "A thali made of silver 999",
    description: "Silver Thali",
    imageSrc: img16,
    imageAlt: "silver plate",
  },
  {
    name: "perfect for gift",
    description: "Silver Box",
    imageSrc: img1,
    imageAlt: "box",
  },
];

export default function CategoryPreview() {
  return (
    <div className="bg-gray-200 rounded-3xl m-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <span className="absolute inset-0" />
                  {callout.name}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
