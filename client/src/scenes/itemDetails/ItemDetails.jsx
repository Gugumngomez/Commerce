import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import Item from '../../components/Item';
import ItemDetailsCss from './ItemDetails.module.css'

/* eslint-disable react-hooks/exhaustive-deps */

const ItemDetails = () => {
    const dispatch = useDispatch();
    const { itemId } = useParams();
    const [value, setValue] = useState("description");
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    async function getItem() {
        const item = await fetch(
            `http://localhost:1337/api/items/${itemId}?populate=image`,
            { method: "GET" }
        );
        const itemJson = await item.json();
        setItem(itemJson.data);
    }

    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            { method: "GET" }
        );
        const itemsJson = await items.json();
        setItems(itemsJson.data);
    }

    useEffect(() => {
        getItem();
        getItems();
    }, [itemId])


    return <div className={ItemDetailsCss.itemsContainer}>
        <div className={ItemDetailsCss.colContainer}>
            {/* images */}
            <div className={ItemDetailsCss.imagesContainer}>
                <img
                    alt={item?.name}
                    src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                />
            </div>
            {/* Actions */}
            <div className={ItemDetailsCss.actions}>
                <div className={ItemDetailsCss.styles}>
                    <h2>{item?.attributes?.name}</h2>
                    <h2>R{item?.attributes?.price}</h2>
                    <h3>{item?.attributes?.longDescription}</h3>
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
                        onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
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
                <Tab label="DESCRIPTION" value="description"/>
                <Tab label="REVIEWS" value="reviews" />
            </Tabs>
        </div>
        <div className={ItemDetailsCss.description}>
            {value === "description" && (
                <div>{item?.attributes?.longDescription}</div>
            )}
            {value === "reviews" && <div>reviews</div>} 
        </div>
        {/* related items */}
        <div className={ItemDetailsCss.relatedItems}>
            <h3>Related Products</h3>
            <div className={ItemDetailsCss.relations}>
                {items.slice(0,4).map((item, i) =>(
                    <Item key={`${item.name}-${i}`} item={item} />
                ))}
            </div>
        </div>
    </div>

};

export default ItemDetails;