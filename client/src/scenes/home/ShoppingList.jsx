import React, { useEffect, useState } from "react";
import ShoppingCss from './ShoppingList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state"
import products from "../../Data";

/* eslint-disable react-hooks/exhaustive-deps */


const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    const isNoneMobile = window.matchMedia("(min-width: 600px)").matches;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // async is used to call the back end which is strapi
    // populate images helps you get images from strapi
    useEffect(() => {
    // Dispatch the setItems action with the products data
    dispatch(setItems(products));
  }, [dispatch]);

    const collaboratedItems = products.filter(
        (product) => product.category === "collaboration"
    );

    const newArrivalsItems = products.filter(
        (product) => product.category === "newArrivals"
    );

    const bestSellersItems = products.filter(
        (product) => product.category === "bestSellers"
    );


    return (
        <div className={ShoppingCss.productBox}>
            <h3 className={ShoppingCss.feature}>
                Our Featured <b>Products</b>
            </h3>
            <Tabs
                className="tabs"
                onChange={handleChange}
                value={value}
                centered
                indicatorColor="black"
                TabIndicatorProps={{ sx: { display: isNoneMobile ? "block" : "none" } }}
                sx={{
                    "& .MuiTabs-flexContainer": {
                        flexWrap: "wrap",
                    },
                }}
            >
                <Tab label="ALL" value="all" />
                <Tab label="NEW ARRIVALS" value="newArrivals" />
                <Tab label="BEST SELLERS" value="bestSellers" />
                <Tab label="COLLABORATION" value="collaboration" />
            </Tabs>

            <div className={ShoppingCss.grid}>
                {value === "all" && items.map((item) => (
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
                {value === "newArrivals" && newArrivalsItems.map((item) => (
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
                {value === "bestSellers" && bestSellersItems.map((item) => (
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
                {value === "collaboration" && collaboratedItems.map((item) => (
                    <Item item={item} key={`${item.name}-${item.id}`} />
                ))}
            </div>

        </div>

    )
}

export default ShoppingList