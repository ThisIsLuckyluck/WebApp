"use client";
import Image from "next/image";
import axios from "axios";
import config from "@/conf";
import { useEffect, useState } from "react";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {useAuth} from "@/AuthContext";

export function CardUi({ productType }) {
    const [productData, setProductData] = useState(null);

    /*WE NEED TO HANDLE LOADING ISLOADING STATE AND USE SKELETON COMPONEnT FROM LIB SHADCN*/

    const { isAuthenticated, updateCartCount } = useAuth();


    function onClickCartforCard(key) {
        if (isAuthenticated) {
            let keysString = localStorage.getItem("Cart") || '';

            let keys = keysString ? keysString.split(',') : [];

            keys.push(key);

            let updatedKeysString = keys.join(',');

            localStorage.setItem("Cart", updatedKeysString);
            updateCartCount(localStorage.getItem('Cart'));
        }
    }


    useEffect(() => {
        const fetchAllProduct = async () => {
            try {
                const response = await axios.get(`${config.URLApi}/product`);

                if (response.status === 200) {
                    console.log(response.data);
                    setProductData(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllProduct();
    }, []);

    return (
        <>
            <div className={"grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2"}>
                {productData && productData.map((item) => item.type_product === productType && (
                    <section key={item.id_product} className={"min-w-52 bg-gray-300 rounded-lg w-full max-w-3xl bg-opacity-30"}>
                        <div className={"p-4 px-6 w-full"}>
                            <div>
                                <p className={"text-3xl text-center text-white font-bold"}>{item.price}$</p>
                                <Image src={"/entree.jpg"} alt={"img"} width={1000} height={1000} className={"py-2"} />
                                    <h1 className={"text-center font-bold text-white text-2xl px-2 w-full sm:text-lg md:text-sm lg:text-xs"}>{item.product_name}</h1>
                                    <HoverCard>
                                        <HoverCardTrigger className={"cursor-zoom-in m-0 p-0"}>
                                            <p className={"w-full mx-auto bg-gray-800 text-white text-center max-w-16 my-2 rounded text-sm"}>+ d&apos;info</p>
                                        </HoverCardTrigger>
                                        <HoverCardContent className={"bg-gray-800 text-white border-0"}>
                                            {item.description}
                                        </HoverCardContent>
                                    </HoverCard>
                                <div>
                                    <button className={"bg-primary p-2 rounded text-sm font-bold text-white mx-auto w-full hover:bg-red-600"} onClick={() => onClickCartforCard(item.id_product)}>ajouter au panier</button>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}
