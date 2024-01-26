"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import axios from "axios";

import config from "@/conf";
import Image from "next/image";

import { Separator } from "@/components/ui/separator"
import {useAuth} from "@/AuthContext";
import {useRouter} from "next/navigation";

export default function CartPage() {
    const [response, setResponse] = useState(null);
    const [arrayIdProduct, setArrayIdProduct] = useState([])

    const { updateCartCount } = useAuth();

    const router = useRouter();

    const createOrder = async (idProductList) => {
        let array = idProductList.toString().split(',')
        try {
            const token = localStorage.getItem("authToken");

            const response = await axios.post(
                `${config.URLApi}/order/create`,
                {
                    order_content: array,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 201) {
                console.log("Order and Order Content created successfully.");
            } else {
                console.log("Failed to create Order or Order Content.");
            }
        } catch (error) {
            console.error("Error:", error.message);
            console.log("Failed to create Order or Order Content.");
        }
        router.push('/order');
    };


    const deleteItem = (productId) => {
        const updatedResponse = response.filter(item => item.id_product !== productId);

        setResponse(updatedResponse);

        const cart = localStorage.getItem('Cart') || '';

        const cartArray = cart.split(',');

        const updatedCartArray = cartArray.filter(id => id !== productId.toString());

        const updatedCart = updatedCartArray.join(',');

        setArrayIdProduct(updatedCart);

        localStorage.setItem('Cart', updatedCart);
        updateCartCount(localStorage.getItem('Cart'));
    };

    const updateItem = (productId, mode) => {
        // Get the current response state
        const currentResponse = [...response];

        // Find the first occurrence of the product with the specified productId in the response array
        const productIndex = currentResponse.findIndex(item => item.id_product === productId);

        // If the product is found in the response array
        if (productIndex !== -1) {
            // Clone the product object to avoid directly modifying the state
            const updatedProduct = { ...currentResponse[productIndex] };

            // Update the quantity based on the mode (either 'remove' or 'add')
            if (mode === 'remove') {
                updatedProduct.quantity = Math.max(0, updatedProduct.quantity - 1);
            } else {
                updatedProduct.quantity += 1;
            }

            // Update the response state with the modified product
            currentResponse[productIndex] = updatedProduct;

            // Set the updated response state
            setResponse(currentResponse);

            // Get the current cart as a comma-separated string from local storage
            const cart = localStorage.getItem('Cart') || '';

            // Convert the cart string into an array of strings
            const cartArray = cart.split(',');

            // Find the first occurrence of the productId in the 'Cart' array
            const indexOfProductId = cartArray.indexOf(productId.toString());

            // If mode is 'remove' and the productId is found in the 'Cart' array, remove it
            if (mode === 'remove' && indexOfProductId !== -1) {
                cartArray.splice(indexOfProductId, 1);
                console.log("cartArray", cartArray);
                setArrayIdProduct(cartArray);
            }

            // If mode is 'add' and the productId is not found in the 'Cart' array, add it
            if (mode !== 'remove') {
                cartArray.push(productId.toString());
                console.log("cartArray", cartArray);
                setArrayIdProduct(cartArray);
            }

            // Convert the updated 'Cart' array back to a comma-separated string
            const updatedCart = cartArray.join(',');

            setArrayIdProduct(updatedCart);

            // Save the updated 'Cart' string back to local storage
            localStorage.setItem('Cart', updatedCart);

            // Update the cart count
            updateCartCount(updatedCart);
        }
    };




    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = localStorage.getItem("Cart");

                console.log("HEY", data);

                // Split the data into an array using a delimiter (assuming it's a comma-separated string)
                const cartIds = data ? data.split(",") : [];

                setArrayIdProduct(cartIds);

                const idCountMap = new Map();

                for (const id of cartIds) {
                    if (idCountMap.has(id)) {
                        // If the ID is already in the map, increment its count
                        idCountMap.set(id, idCountMap.get(id) + 1);
                    } else {
                        idCountMap.set(id, 1);
                    }
                }

                console.log(idCountMap);

                const uniqueIdsArray = Array.from(idCountMap.keys());

                console.log(uniqueIdsArray);

                const response = await axios.post(`${config.URLApi}/product/id`, {
                    id_products: uniqueIdsArray,
                });

                if (response.status === 200) {
                    console.log(response.data);

                    // Update the quantity property for each item in the response array
                    const responseWithUpdatedQuantity = response.data.map((item) => {
                        console.log("ITEM", item.id_product);
                        console.log(idCountMap);
                        const quantityFromMap = idCountMap.get(`${item.id_product}`);
                        console.log("HERE",quantityFromMap);
                        return {
                            ...item,
                            quantity: quantityFromMap,
                        };
                    });

                    console.log(responseWithUpdatedQuantity);

                    setResponse(responseWithUpdatedQuantity);

                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    function TotalCount() {
        if (!response) {
            return 0;
        }

        let totalCount = 0;

        for (let i = 0; i < response.length; i++) {
            console.log(i);
            totalCount += response[i].price * response[i].quantity;
            console.log(totalCount);
        }

        return parseFloat(totalCount.toFixed(2));
    }

    let TotalResult = TotalCount()

    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 items-center min-h-[650px]"}>
            <section className={"bg-gray-900 max-h-[450px] max-w-[550px] w-full rounded"}>
                <div className={"max-w-lg mx-auto my-4"}>
                <h1 className={"font-bold text-white my-2 text-lg"}>Votre panier</h1>
                <ScrollArea className="h-[390px] max-w-[550px] rounded ">
                    {response && response.map((item) => (
                        <div key={item.id_product}>
                        <div className={"flex py-2"}>
                            <Image src={config.URLAssets + "/images/product/" + item.id_product + "/image/image.png"} alt="sushi" width={150} height={150} className="rounded" />
                            <div className={"w-full max-w-xs mx-auto"}>
                                <div className={"flex justify-between"}>
                                    <div>
                                        <p className={"text-lg font-bold text-white"}>{item.product_name}</p>
                                        <p className={"text-gray-400"}>{item.type_product}</p>
                                    </div>
                                    <p className={"text-lg font-bold text-white"}>{item.price}€</p>
                                </div>
                                <div className="mt-10 flex justify-between">
                                    <div className={"flex max-h-full text-white font-thin items-center"}>
                                        <button className={"text-2xl"} onClick={() => updateItem(item.id_product, "remove")}>-</button>
                                        <p className={"mx-2 px-1 text-black bg-amber-50 rounded"}>{item.quantity}</p>
                                        <button className={"text-2xl"} onClick={() => updateItem(item.id_product, "add")}>+</button>
                                    </div>
                                    <button className="font-bold text-red-600" onClick={() => deleteItem(item.id_product)}>Retirer</button>
                                </div>
                            </div>
                        </div>
                            <Separator className={"max-w-lg my-2"}/>
                        </div>
                    ))}
                </ScrollArea>
                </div>
            </section>
            <section className={"text-lg text-white"}>
                <div className={"w-full max-w-md mx-auto bg-gray-900 p-8 rounded"}>
                    <h1 className={"text-white text-2xl font-bold"}>Récapitulatif</h1>
                    <Separator className={"max-w-lg my-2"}/>
                    <ScrollArea className="h-[200px] max-w-[550px] rounded">
                        {response && response.map((item) => (
                            <div key={item.id_product} className={"flex justify-between text-white pb-5"}>
                                <div className={"flex"}>
                                    <p className={"pr-5"}>{item.product_name}, {item.type_product}</p>
                                    <p className={"text-primary"}>x{item.quantity}</p>
                                </div>
                                <p>{item.price}€</p>
                            </div>
                        ))}
                    </ScrollArea>
                    <Separator className={"max-w-lg my-2"}/>
                    <div className={"flex justify-between"}>
                        <p className={"pr-5"}>Total</p>
                        <p className={"text-white font-bold"}>{TotalResult}€</p>
                    </div>
                    <button className={"w-full rounded-lg bg-primary p-2 py-2 my-5 font-bold"} onClick={() => createOrder(arrayIdProduct)}>Passez votre commande</button>
                </div>
            </section>
        </div>
    );
};
