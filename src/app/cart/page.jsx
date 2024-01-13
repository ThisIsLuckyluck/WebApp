"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import axios from "axios";

import config from "@/conf";
import Image from "next/image";

import { Separator } from "@/components/ui/separator"

export default function CartPage() {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = localStorage.getItem("Cart");

                console.log("HEY", data);

                // Split the data into an array using a delimiter (assuming it's a comma-separated string)
                const cartIds = data ? data.split(',') : [];

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
                    setResponse(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 items-center min-h-[650px]"}>
            <section className={"bg-gray-900 max-h-[450px] max-w-[550px] w-full rounded"}>
                <div className={"max-w-lg mx-auto my-4"}>
                <h1 className={"font-bold text-white my-2 text-lg"}>Votre panier</h1>
                <ScrollArea className="h-[400px] max-w-[550px] rounded">
                    {response && response.map((item) => (
                        <div key={item.id_product}>
                        <div className={"flex py-2"}>
                            <Image src="/entree.jpg" alt="sushi" width={150} height={150} className="rounded" />
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
                                        <button className={"text-2xl"}>-</button>
                                        <p className={"mx-2 px-1 text-black bg-amber-50 rounded"}>20</p>
                                        <button className={"text-2xl"}>+</button>
                                    </div>
                                    <button className="font-bold text-red-600">Retirer</button>
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
                        <div className={"flex justify-between text-white"}>
                            <div className={"flex"}>
                                <p className={"pr-5"}>name, type</p>
                                <p className={"text-primary"}>x10</p>
                            </div>
                            <p>€</p>
                        </div>
                    </ScrollArea>
                    <Separator className={"max-w-lg my-2"}/>
                    <div className={"flex justify-between"}>
                        <p className={"pr-5"}>Total</p>
                        <p className={"text-white font-bold"}>€</p>
                    </div>
                    <button className={"w-full rounded-lg bg-primary p-2 py-2 my-5 font-bold"}>Passez votre commande</button>
                </div>
            </section>
        </div>
    );
};
