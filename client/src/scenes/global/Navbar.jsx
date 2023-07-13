import React from 'react'
import NavCss from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from '../../state';

const Navbar = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const navigate = useNavigate();

    return (
        <div className={NavCss.container}>
            <div className={NavCss.box}>
                <div className={NavCss.navhome} onClick={() => navigate("/")}>
                    BEAUTIQUE
                </div>
                <div className={NavCss.icons}>
                    <button >
                        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                    </button>
                    <button >
                        <i className="fa-solid fa-user fa-lg"></i>
                    </button>
                    <button onClick={() => dispatch(setIsCartOpen({}))}>
                        <i className="fa-solid fa-bag-shopping fa-lg"></i>
                        {cart.length > 0 && <div className={NavCss.badge}>{cart.length}</div>}
                    </button>
                    <button >
                        <i className="fa-solid fa-bars fa-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar