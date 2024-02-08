"use client"

import {useEffect, useState} from "react";
import axios from "axios";
import config from "@/conf";

import { Progress } from "@/components/ui/progress"
import {decode} from "jsonwebtoken";
import {ScrollArea} from "@/components/ui/scroll-area";


export default function OrderStatePage(){
    const [stateOrder, setStateOrder] = useState('');
    const [valueBar, setValueBar] = useState(0);
    const [idOrder, setIdOrder] = useState('');
    const [orderDetail, setOrderDetail] = useState('');
    const [stringState, setStringState] = useState('En attente de chargement...');
    const [BgColorState,setBgColorState] = useState('gray');

    useEffect(() => {
        const webSocket = new WebSocket(`${config.URLWebSocket}`);

        webSocket.onopen = () => {
            console.log('WebSocket connected');
            const token = localStorage.getItem('authToken');
            const message = JSON.stringify({ jwt: token });
            webSocket.send(message);
        };

        webSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data[0].order_state);
            setStateOrder(data[0].order_state);
            setIdOrder(data[0].id_order);

            const { value, string, BgColor } = SetterBar(data[0].order_state);
            setBgColorState(BgColor);
            setValueBar(value);
            setStringState(string);
        };

        const fetchDetailOrder = async () => {
            try {
                const token = localStorage.getItem("authToken");

                const data = { id_order: idOrder };

                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                };

                const response = await axios.post(`${config.URLApi}/order/details`, data, { headers });

                if (response.status === 200) {
                    setOrderDetail(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchDetailOrder();
    }, [idOrder, stateOrder]);

    const SetterBar = (stateOrder) => {
        let value;
        let string;
        let BgColor;

        switch (stateOrder) {
            case 1:
                string = 'En attente de prise en charge';
                value = 25;
                BgColor = 'bg-gray-600';
                break;
            case 2:
                string = 'En cours de préparation';
                value = 65;
                BgColor = 'bg-orange-600';
                break;
            case 3:
                string = 'Commande prête';
                BgColor = 'bg-green-600';
                value = 100;
                break;
            default:
                string = 'None';
                BgColor = 'bg-gray-600';
                value = 0;
                break;
        }

        return {value, string, BgColor};
    };

    return(
        <div className={"rounded-lg"}>
            <section className={"max-w-5xl mx-auto"}>
                <div className={"max-w-sm mx-auto"}>
                    <h1 className={"text-center text-lg md:text-3xl font-bold text-white"}>Votre dernière commande</h1>
                </div>
                <div className={"lg:flex justify-between py-5 w-full items-start"}>
                    <div className={"bg-gray-400 rounded-lg w-full lg:max-w-md h-40 mb-5"}>
                        <h1 className={"text-center font-bold text-white text-lg md:text-xl pb-3 pt-3"}>Etat de votre commande</h1>
                        <p className={`text-center ${BgColorState} max-w-64 mx-auto py-2 rounded-md text-white font-bold my-2`}>{stringState}</p>
                        <Progress value={valueBar} className={"h-6 w-[80%] mx-auto rounded-md"}/>
                    </div>
                    <div className={"bg-gray-400 rounded-lg w-full lg:max-w-lg"}>
                        <h1 className={"text-center font-bold text-white text-lg md:text-xl py-3"}>Detail de votre commande</h1>
                        <ScrollArea className="h-[390px] max-w-[550px] rounded ">
                        {orderDetail && orderDetail.map((item) => (
                            <section key={item.id_product} className={"bg-gray-500 rounded-lg w-full max-w-sm md:max-w-md mx-auto my-3"}>
                                <div className={"flex justify-between items-center"}>
                                    <h1 className={"text-center font-bold text-white text-xl px-2 w-full sm:text-lg md:text-sm lg:text-sm py-3"}>{item.product_name} {item.id_product}</h1>
                                    <p className={"w-full text-primary font-bold text-center"}>Quantity</p>
                                </div>
                            </section>
                        ))}
                        </ScrollArea>
                    </div>
                </div>
            </section>
        </div>
    )
}