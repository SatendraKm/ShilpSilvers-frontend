const ProductCard = (props) => {
  const { cardData } = props;
  const { image, name, cost } = cardData;
  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img className="res-logo rounded-lg" alt="res-logo" src={image} />
      <div className="res-card-content">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h5>{cost}</h5>
      </div>
    </div>
  );
};

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute p-2 m-2 rounded-lg bg-black text-white">
//           promoted
//         </label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default ProductCard;
