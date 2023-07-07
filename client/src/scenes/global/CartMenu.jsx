import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    decreaseCount,
    increaseCount,
    removeFromCart,
    setIsCartOpen,

} from "../../state";
import { useNavigate } from "react-router-dom";
import CartCss from './Cartmenu.module.css';

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    }, 0);

    return (
        <div className={CartCss.overlay} style={{ display: isCartOpen ? "block" : "none" }}>
            <div className={CartCss.model}>
                <div className={CartCss.header}>
                    {/* header */}
                    <div className={`${CartCss.flexbox} ${CartCss.shoppingbag}`}>
                        <h3>SHOPPING BAG ({cart.length})</h3>
                        <button onClick={() => {
                            dispatch(setIsCartOpen({}));
                            console.log('button clicked');
                        }}>
                            <i className="fa-solid fa-xmark fa-lg"></i>
                        </button>
                    </div>
                    {/* cart list */}
                    <div>
                        {cart.map((item) => (
                            <div>
                                <div className={`${CartCss.flexbox} ${CartCss.cartlist}`}>
                                    <div className={CartCss.flex}>
                                        <img alt={item?.name} className={CartCss.images}
                                            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} />
                                    </div>
                                    <div className={CartCss.flex1}>
                                        {/* item name */}
                                        <div className={`${CartCss.flexbox} ${CartCss.mb}`}>
                                            <h4>{item.attributes.name}</h4>
                                            <button onClick={() =>
                                                dispatch(removeFromCart({ id: item.id }))}>
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                        <h4>{item.attributes.shortDescription}</h4>
                                        {/* Amount */}
                                        <div className={`${CartCss.flexbox} ${CartCss.margin}`}>
                                            <div className={CartCss.itemremove}>
                                                <button onClick={() => dispatch(decreaseCount({ id: item.id }))}>
                                                    <i className="fa-solid fa-minus"></i>
                                                </button>
                                                <h4>{item.count}</h4>
                                                <button onClick={() => dispatch(increaseCount({ id: item.id }))}>
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                            </div>
                                            {/* price */}
                                            <h4> ${item.attributes.price}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className={CartCss.divider}></div>
                            </div>
                        ))}
                    </div>
                    {/* Actions */}
                    <div className={CartCss.margin1}>
                        <div className={`${CartCss.flexbox} ${CartCss.margin1}`}>
                            <h4 >SUBTOTAL</h4>
                            <h4 >${totalPrice}</h4>
                        </div>
                        <button className={CartCss.action}
                            onClick={() => {
                                navigate("/checkout");
                                dispatch(setIsCartOpen({}));
                            }}>
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartMenu