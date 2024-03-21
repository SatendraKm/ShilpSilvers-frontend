// import CarouselData from "../../utils/CarouselData";
// import { Carousel, Button, Typography } from "@material-tailwind/react";
// import React from "react";
// import { Link } from "react-router-dom";

// export default function CarouselComponent() {
//   const data = CarouselData;
//   return (
//     <Carousel className="m-0.5 mx-auto  ">
//       {data.map((e) => (
//         <div key={e.id} className="relative h-full w-full">
//           <img
//             src={e.imageSrc}
//             alt="tab 1"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
//             <div className="w-3/4 text-center md:w-2/4">
//               <Typography
//                 variant="h1"
//                 color="white"
//                 className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//               >
//                 The Beauty of Silver
//               </Typography>
//               <Typography
//                 variant="lead"
//                 color="white"
//                 className="mb-12 opacity-80"
//               >
//                 Handcrafted silver items may carry this tag to highlight their
//                 artisanal quality and uniqueness.
//               </Typography>
//               <div className="flex justify-center gap-2">
//                 <Link to={"/AllProduct"}>
//                   {" "}
//                   <Button size="lg" color="white">
//                     Buy Now
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Carousel>
//   );
// }
