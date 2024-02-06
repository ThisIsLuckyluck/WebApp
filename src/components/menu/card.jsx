"use client";
import Image from "next/image";
import axios from "axios";
import config from "@/conf";
import { useEffect, useState } from "react";

import {useAuth} from "@/AuthContext";
import {
    AlertDialog, AlertDialogAction,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";

export function CardUi({ productType }) {
    const [productData, setProductData] = useState(null);

    /*WE NEED TO HANDLE LOADING ISLOADING STATE AND USE SKELETON COMPONEnT FROM LIB SHADCN*/
    /*THE BACKGROUND = IMAGE OF THE PRODUCT BUT WITH OPCAITY 30%*/

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
                                <p className={"text-3xl text-center text-white font-bold"}>{item.price}€</p>
                                <Image src={config.URLAssets + "/images/product/" + item.id_product + "/image/image.png"} alt={"img"} width={1000} height={1000} className={"py-2"} />
                                    <h1 className={"text-center font-bold text-white text-2xl px-2 w-full sm:text-lg md:text-sm lg:text-xs"}>{item.product_name}</h1>
                                <AlertDialog>
                                    <div className={"w-full max-w-16 mx-auto"}>
                                        <AlertDialogTrigger className={"w-full mx-auto bg-gray-800 text-white font-bold text-center my-2 rounded text-sm hover:bg-gray-900 py-1 px-1"}>+ d&apos;info</AlertDialogTrigger>
                                    </div>
                                    <AlertDialogContent className={"text-white bg-gray-800 shadow-lg border-0 shadow-black"}>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle className={"text-xl"}>{item.product_name}</AlertDialogTitle>
                                            <AlertDialogDescription className={"text-gray-200 text-lg"}>
                                                {item.description}
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogAction>Close</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
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
