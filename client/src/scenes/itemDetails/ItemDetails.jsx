import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../state";
import { useParams, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import Item from '../../components/Item';
import products from "../../Data";
import ItemDetailsCss from './ItemDetails.module.css';

/* eslint-disable react-hooks/exhaustive-deps */

const ItemDetails = () => {
    const dispatch = useDispatch();
    const { itemId } = useParams();
    console.log('params:', useParams());
    // const location = useLocation();
    // console.log('itemId:', itemId);
    // console.log('Location:', location);

    const [value, setValue] = useState("description");
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(null);
    const [product, setProduct] = useState(null);
    const [items, setItems] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const fetchItem = async (itemId) => {
        try {
            console.log('Fetching item with ID:', itemId);
            const foundProduct = products.find((product) => product.id.toString() === itemId);

            if (foundProduct) {
                console.log('Found product:', foundProduct);
                return foundProduct;
            } else {
                throw new Error(`Product with ID ${itemId} not found`);
            }
        } catch (error) {
            console.error("Error fetching item:", error);
            throw error;
        }
    };

    const fetchRelatedItems = async () => {
        try {
            // Shuffle the products array
            const shuffledProducts = [...products].sort(() => Math.random() - 0.5);

            // Select the first four items
            const relatedItems = shuffledProducts.slice(0, 4);

            return relatedItems;
        } catch (error) {
            console.error("Error fetching related items:", error);
            throw error;
        }
    };
    // ...

    // Modify your useEffect to fetch data
    useEffect(() => {
        console.log("itemId:", itemId);
        const fetchData = async () => {
            try {
                const itemData = await fetchItem(itemId);
                setProduct(itemData);

                const relatedItemsData = await fetchRelatedItems();
                setRelatedProducts(relatedItemsData);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle errors as needed
            }
        };

        fetchData();
    }, [itemId]);



    return <div className={ItemDetailsCss.itemsContainer}>
        <div className={ItemDetailsCss.colContainer}>
            {/* images */}
            <div className={ItemDetailsCss.imagesContainer}>
                {product && (
                    <img
                        src={product?.image}
                        alt={product?.name}
                    />
                )}
            </div>
            {/* Actions */}
            <div className={ItemDetailsCss.actions}>
                <div className={ItemDetailsCss.styles}>
                    <h2>{product?.name}</h2> {/* Check if product is not null */}
                    <h2>R{product?.price}</h2>
                    <h3>{product?.longDescription}</h3>
                </div>
                <div className={ItemDetailsCss.itemStyles}>
                    {/* count and button */}
                    <div className={ItemDetailsCss.itemOne}>
                        <button className={ItemDetailsCss.quantity} onClick={() => setCount(Math.max(count - 1, 1))}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <h4>{count}</h4>
                        <button className={ItemDetailsCss.quantity} onClick={() => setCount(count + 1)}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <button className={ItemDetailsCss.btn}
                        onClick={() => dispatch(addToCart({ item: { ...product, count } }))}
                        disabled={!product}
                    > ADD TO CART </button>
                </div>
                <div>
                    <div className={ItemDetailsCss.icns}>
                        <i className="fa-regular fa-star"></i>
                        <h4> ADD TO WHISHLIST </h4>
                    </div>
                </div>
            </div>
        </div>
        {/* information */}
        <div className={ItemDetailsCss.info}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="DESCRIPTION" value="description" />
                <Tab label="REVIEWS" value="reviews" />
            </Tabs>
        </div>
        <div className={ItemDetailsCss.description}>
            {value === "description" && (
                <div>{product && product.longDescription}</div>
            )}
            {value === "reviews" && <div>reviews</div>}
        </div>
        {/* related items */}
        <div className={ItemDetailsCss.relatedItems}>
            <h3>Related Products</h3>
            <div className={ItemDetailsCss.relations}>
                {relatedProducts.map((product, i) => (
                    <Item key={`${product.name}-${i}`} item={product} />
                ))}
            </div>
        </div>
    </div>

};

export default ItemDetails;