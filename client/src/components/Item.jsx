import React, { useState } from 'react';
import ItemCss from './Item.module.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
    console.log('Product:', item);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    if (!item) {
        return null; // or handle the case when item is not available
    }

    const { category, price, name, image } = item;

    // we are grabbing the data property

    return (
        <div width={width}>
            <div
                className={ItemCss.position}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}>

                <img
                    alt={name}
                    src={image}
                    onClick={() => navigate(`/item/${item.id}`)}
                    style={{ cursor: "pointer" }} />

                <div
                    className={`${ItemCss.boxContainer} ${isHovered ? ItemCss.displayBlock : ItemCss.displayNone}`} >
                    <div className={ItemCss.boxOne}>
                        {/* Amount */}
                        <div className={ItemCss.boxTwo}>
                            {/* making sure the count !< 1 */}
                            <button className={ItemCss.quantity} onClick={() => setCount(Math.max(count - 1, 1))}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                            <h4>{count}</h4>
                            <button className={ItemCss.quantity} onClick={() => setCount(count + 1)}>
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <button className={ItemCss.cart} onClick={() => {
                            dispatch(addToCart({ item: { ...item, count } }))
                        }}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className={ItemCss.boxThree}>
                <div className={ItemCss.category}>
                    {category
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                </div>
                <div className={ItemCss.names}>{name}</div>
                <div className={ItemCss.prices}>R{price}</div>
            </div>
        </div>
    )
}

export default Item