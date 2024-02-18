// import React, { useState } from "react";

// const Carousel = () => {
//   const slides = [
//     "https://media.istockphoto.com/id/1516920214/photo/part-of-carousel-by-the-eiffel-tower-in-paris-on-sunset-background-france.webp?b=1&s=170667a&w=0&k=20&c=07JY2z5jj0cyvc-TyBDTT2MZMtK3fTWNUip4ju2m7DQ=",
//     "https://tribalornaments.com/cdn/shop/products/il_fullxfull.2833661976_dff4_9cdc6e19-2568-48f9-bd81-9444c58fbcbe.jpg?v=1631783179&width=1946",
//     "https://tribalornaments.com/cdn/shop/products/il_fullxfull.2699763751_n950.jpg?v=1616750976&width=1946",
//     "https://images.unsplash.com/photo-1577774438656-768f1e5d9ed6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];
//   const [current, setCurrent] = useState(0);
//   const previousSlide = () => {
//     if (current === 0) setCurrent(slides.length - 1);
//     else setCurrent(current - 1);
//   };
//   const nextSlide = () => {
//     if (current === slides.length - 1) setCurrent(0);
//     else setCurrent(current + 1);
//   };
//   return (
//     <div className="w-full my-10">
//       <div className="overflow-hidden relative ">
//         <div
//           className={` flex transition ease-out duration-300 `}
//           style={{
//             transform: `translateX(-${current * 100}%)`,
//           }}
//         >
//           {slides.map((s) => {
//             return (
//               <img
//                 src={s}
//                 alt={"for carousel"}
//                 key={s.index}
//                 className=" object-cover w-full"
//               />
//             );
//           })}
//         </div>
//         <div className="absolute top-0 w-full h-1/2 justify-between items-center flex text-white px-10 text-xl">
//           <button onClick={previousSlide}>
//             {
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-16 h-16 bg-white/50"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15.75 19.5 8.25 12l7.5-7.5"
//                 />
//               </svg>
//             }
//           </button>
//           <button onClick={nextSlide}>
//             {
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-16 h-16 bg-white/50"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="m8.25 4.5 7.5 7.5-7.5 7.5"
//                 />
//               </svg>
//             }
//           </button>
//         </div>
//         <div className="absolute bottom-0 py-4 flex justify-center gap-10 w-full">
//           <div className="rounded-full w-5 h-5 bg-white"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Carousel = () => {
  const images = [
    "https://media.istockphoto.com/id/1516920214/photo/part-of-carousel-by-the-eiffel-tower-in-paris-on-sunset-background-france.webp?b=1&s=170667a&w=0&k=20&c=07JY2z5jj0cyvc-TyBDTT2MZMtK3fTWNUip4ju2m7DQ=",

    "https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp",
    "https://images.unsplash.com/photo-1577774438656-768f1e5d9ed6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-1/2">
      <Transition
        show={true}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </Transition>
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white px-2 py-1 rounded-md"
      >
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 bg-white/50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        }
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white px-2 py-1 rounded-md"
      >
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 bg-white/50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        }
      </button>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {images.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrentIndex(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
