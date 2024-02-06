"use client"
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "@/conf";
import {ScrollArea} from "@/components/ui/scroll-area";

export default function RecordOrderTable() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        let headers = {
            "Authorization": `Bearer ${token}`
        };

        axios.get(`${config.URLApi}/order/id/user`, { headers: headers })
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className={"w-full"}>
            <section className={"bg-gray-600 w-full max-w-3xl h-[400px] mx-auto rounded-lg py-1"}>
                <div className={"max-w-2xl mx-auto"}>
                    <p className={"my-5 text-center text-lg md:text-2xl text-white font-bold"}>Historique de vos commandes</p>
                </div>
                <ScrollArea className="h-72 max-w-2xl rounded mx-auto">
                    {orders.map(order => (
                        <div key={order.id_order} className={""}>
                            <section className={"max-w-2xl mx-auto flex justify-between"}>
                                <div className={"text-center"}>
                                    <p className={"text-primary text-xs md:text-sm"}>Commande Numéro</p>
                                    <p className={"text-white text-sm md:text-lg"}>{order.id_order}</p>
                                </div>
                                <div className={"text-center"}>
                                    <p className={"text-primary text-xs md:text-sm"}>Préparateur</p>
                                    {order.id_picker === null
                                        ? <p className={"text-white text-sm md:text-lg"}>Aucun</p>
                                        : <p className={"text-white text-sm md:text-lg"}>{order.id_picker}</p>
                                    }
                                </div>
                                <div className={"text-center"}>
                                <p className={"text-primary text-xs md:text-sm"}>Date</p>
                                    <p className={"text-white size-20"}>{order.date}</p>
                                </div>
                            </section>
                            <Separator className={"max-w-2xl mx-auto my-3"}/>
                        </div>
                    ))}
                </ScrollArea>
            </section>
        </div>
    )
}
