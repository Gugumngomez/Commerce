// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../state";
// import { useParams, useLocation } from "react-router-dom";
// import { Tabs, Tab } from "@mui/material";
// import Item from '../../components/Item';
// import products from "../../Data";
// import ItemDetailsCss from './ItemDetails.module.css';

// /* eslint-disable react-hooks/exhaustive-deps */

// const ItemDetails = () => {
//     const dispatch = useDispatch();
//     const { itemId } = useParams();
//     const location = useLocation();
//     console.log('itemId:', itemId);
//     console.log('Location:', location);

//     const [value, setValue] = useState("description");
//     const [count, setCount] = useState(1);
//     const [item, setItem] = useState(null);
//     const [product, setProduct] = useState(null);
//     const [items, setItems] = useState([]);
//     const [relatedProducts, setRelatedProducts] = useState([]);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     }

//     useEffect(() => {
//         console.log("itemId:", itemId);
//         // Log the itemId to check its value

//         // Find the matching product in the products array based on the itemId
//         const foundProduct = products.find((product) => product.id === itemId);
//         console.log("Product:", product);

//         // Check if a valid product was found
//         if (foundProduct) {
//             setProduct(foundProduct);
//         } else {
//             // Handle the case where no matching product is found for the itemId
//             // You can redirect to an error page or handle it as needed.
//             // Example: history.push('/error');
//         }

//         // Get related products
//         const related = products.slice(0, 4); // Adjust the slice as needed
//         setRelatedProducts(related);
//     }, [itemId]);



//     return <div className={ItemDetailsCss.itemsContainer}>
//         <div className={ItemDetailsCss.colContainer}>
//             {/* images */}
//             <div className={ItemDetailsCss.imagesContainer}>
//                 {product && (
//                     <img
//                         src={product?.image}
//                         alt={product?.name}
//                     />
//                 )}
//             </div>
//             {/* Actions */}
//             <div className={ItemDetailsCss.actions}>
//                 <div className={ItemDetailsCss.styles}>
//                     <h2>{product?.name}</h2> {/* Check if product is not null */}
//                     <h2>R{product?.price}</h2>
//                     <h3>{product?.longDescription}</h3>
//                 </div>
//                 <div className={ItemDetailsCss.itemStyles}>
//                     {/* count and button */}
//                     <div className={ItemDetailsCss.itemOne}>
//                         <button className={ItemDetailsCss.quantity} onClick={() => setCount(Math.max(count - 1, 1))}>
//                             <i className="fa-solid fa-minus"></i>
//                         </button>
//                         <h4>{count}</h4>
//                         <button className={ItemDetailsCss.quantity} onClick={() => setCount(count + 1)}>
//                             <i className="fa-solid fa-plus"></i>
//                         </button>
//                     </div>
//                     <button className={ItemDetailsCss.btn}
//                         onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
//                         disabled={!product}
//                     > ADD TO CART </button>
//                 </div>
//                 <div>
//                     <div className={ItemDetailsCss.icns}>
//                         <i className="fa-regular fa-star"></i>
//                         <h4> ADD TO WHISHLIST </h4>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         {/* information */}
//         <div className={ItemDetailsCss.info}>
//             <Tabs value={value} onChange={handleChange}>
//                 <Tab label="DESCRIPTION" value="description" />
//                 <Tab label="REVIEWS" value="reviews" />
//             </Tabs>
//         </div>
//         <div className={ItemDetailsCss.description}>
//             {value === "description" && (
//                 <div>{product && product.longDescription}</div>
//             )}
//             {value === "reviews" && <div>reviews</div>}
//         </div>
//         {/* related items */}
//         <div className={ItemDetailsCss.relatedItems}>
//             <h3>Related Products</h3>
//             <div className={ItemDetailsCss.relations}>
//                 {products.slice(0, 4).map((product, i) => (
//                     <Item key={`${product.name}-${i}`} item={product} />
//                 ))}
//             </div>
//         </div>
//     </div>

// };

// export default ItemDetails;