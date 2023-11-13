import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decreaseCount,
    increaseCount,
    removeFromCart,
    setIsCartOpen,

} from "../../state";
// import products from '../../Data';
import { useNavigate } from "react-router-dom";
import CartCss from './Cartmenu.module.css';

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    console.log('Current Cart:', cart); // Add this line to log the cart

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.price;
    }, 0);

    return (
        <div className={CartCss.overlay} style={{ display: isCartOpen ? "block" : "none" }}>
            <div className={CartCss.model}>
                <div className={CartCss.header}>


                    {/* header */}
                    <div className={`${CartCss.flexbox} ${CartCss.shoppingbag}`}>
                        <h3>SHOPPING BAG ({cart.length})</h3>
                        <button className={CartCss.btnClose} onClick={() => {
                            dispatch(setIsCartOpen({}));
                            console.log('button clicked');
                        }}>
                            <i className="fa-solid fa-xmark fa-lg"></i>
                        </button>
                    </div>


                    {/* cart list */}
                    <div>
                        {cart.map((item) => {
                            
                            return (
                                <div key={`${item.name}-${item.id}`}>
                                    <div className={`${CartCss.flexbox} ${CartCss.cartlist}`}>
                                        <div className={CartCss.flex}>
                                            <img
                                                alt='' // Use product.name from Data.js
                                                className={CartCss.images}
                                                src={item.image} // Use product.image from Data.js
                                            />
                                        </div>
                                        <div className={CartCss.flex1}>


                                            {/* item name */}
                                            <div className={`${CartCss.flexbox} ${CartCss.mb}`}>
                                                <h4>{item.name}</h4> {/* Use product.name from Data.js */}
                                                <button onClick={() => 
                                                 // Add this line for debugging
                                                    dispatch(removeFromCart({ id: item.id }))
                                                }>
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                            <h4>{item.shortDescription}</h4> {/* Use product.shortDescription from Data.js */}


                                            {/* Amount */}
                                            <div className={`${CartCss.flexbox} ${CartCss.margin}`}>
                                                <div className={CartCss.itemremove}>
                                                    <button className={CartCss.btnI} onClick={() => {
                                                        console.log('Decreasing count for item with id:', item.id); // Add this line for debugging
                                                        dispatch(decreaseCount({ id: item.id }));
                                                    }}>
                                                        <i className="fa-solid fa-minus"></i>
                                                    </button>

                                                    <h4>{item.count}</h4>
                                                    <button className={CartCss.btnI} onClick={() => dispatch(increaseCount({ id: item.id }))}>
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                </div>
                                                {/* price */}
                                                <h4> R{item.price}</h4> {/* Use product.price from Data.js */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={CartCss.divider}></div>
                                </div>
                            );
                        })}
                    </div>


                    {/* Actions */}
                    <div className={CartCss.margin1}>
                        <div className={`${CartCss.flexbox} ${CartCss.margin1}`}>
                            <h4 >SUBTOTAL</h4>
                            <h4 >R{totalPrice}</h4>
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