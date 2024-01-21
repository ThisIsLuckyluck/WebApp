"use client";
import Image from "next/image";
import axios from "axios";
import config from "@/conf";
import { useEffect, useState } from "react";

export function CardUi() {
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
                    setProductData(response.data);  // Set the fetched data in state
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllProduct();  // Invoke the fetchAllProduct function
    }, []);  // Make sure to pass an empty dependency array if fetchAllProduct doesn't depend on any props or state

    return (
        <>
            <div className={"grid md:grid-cols-5 gap-2"}>
                {productData && productData.map((item) => item.type_product === "appetizer" && (
                    <section key={item.id_product} className={"min-w-52 bg-gray-300 rounded-lg w-full max-w-2xl bg-opacity-30"}>
                        <div className={"p-4 px-6 w-full"}>
                            <div>
                                <p className={"text-3xl text-center text-white font-bold"}>{item.price}$</p>
                                <Image src={"/entree.jpg"} alt={"img"} width={1000} height={1000} className={"py-2"} />
                                <div className={"flex items-center justify-center w-full overflow-hidden"}>
                                    <h1 className={"text-center font-bold text-white text-sm px-2"}>{item.product_name}</h1>
                                    <p className={"italic text-gray-300 text-xs"}>{item.type_product}</p>
                                </div>
                                <div>
                                    <p className={"py-3 text-gray-200 text-sm italic"}>{item.description}</p>
                                    <button className={"bg-primary p-2 rounded text-sm font-bold text-white mx-auto w-full hover:bg-red-600"}>ajouter au panier</button>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}
