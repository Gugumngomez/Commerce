import React, { useEffect, useState } from "react";
import ShoppingCss from './ShoppingList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state"

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
        async function getItems() {
            const items = await fetch(
                "http://localhost:1337/api/items?populate=image",
                { method: "GET" }
            );
            const itemsJson = await items.json();
            dispatch(setItems(itemsJson.data));

            setItems(itemsJson);
        }

        getItems();
    }, [value]);

    const collaboratedItems = items.filter(
        (item) => item.attributes.category === "collaboration"
    );

    const newArrivalsItems = items.filter(
        (item) => item.attributes.category === "newArrivals"
    );

    const bestSellersItems = items.filter(
        (item) => item.attributes.category === "bestSellers"
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