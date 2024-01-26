"use client"

import {useEffect, useState} from "react";
import axios from "axios";
import config from "@/conf";

import { Progress } from "@/components/ui/progress"
import {decode} from "jsonwebtoken";


export default function OrderStatePage(){
    const [stateOrder, setStateOrder] = useState('');
    const [valueBar, setValueBar] = useState(0);
    const [idOrder, setIdOrder] = useState('');
    const [orderDetail, setOrderDetail] = useState('');
    const [stringState, setStringState] = useState('');

    useEffect(() => {
        const fetchStateOrder = async () => {
            try {
                const token = localStorage.getItem("authToken");

                const { id } = decode(token);

                const data = { id_client: id };

                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                };

                const response = await axios.post(`${config.URLApi}/order/state`, data, { headers });

                if (response.status === 200) {
                    setStateOrder(response.data[0].order_state);
                    setIdOrder(response.data[0].id_order);
                    console.log(idOrder);

                    const { value, string } = SetterBar(response.data[0].order_state);
                    setValueBar(value);
                    setStringState(string);
                }
            } catch (error) {
                console.error(error);
            }
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

        fetchStateOrder();
        fetchDetailOrder();
    }, [idOrder, stateOrder]);

    const SetterBar = (stateOrder) => {
        let setValueBar;
        switch (stateOrder) {
            case 1:
                setValueBar = 25;
                break;
            case 2:
                setValueBar = 65;
                break;
            case 3:
                setValueBar = 100;
                break;
            default:
                setValueBar = 0;
                break;
        }

        return setValueBar;
    };


    return(
        <div className={"bg-primary"}>
            <section className={"bg-white max-w-5xl mx-auto"}>
                <div className={"bg-amber-300 max-w-sm mx-auto"}>
                    <h1 className={"text-center text-lg md:text-3xl font-bold text-white"}>Votre commande en cours...</h1>
                </div>
                <div className={"flex py-5"}>
                    <div className={"bg-green-600 w-full"}>
                        <h1 className={"text-center font-bold text-white text-lg md:text-xl pb-3"}>Etat de votre commande</h1>
                        <Progress value={valueBar} className={"h-[40%] w-[80%] mx-auto rounded-md"}/>
                    </div>
                    <div className={"bg-blue-900 w-full"}>
                        <h1 className={"text-center font-bold text-white text-lg md:text-xl"}>Detail de votre commande</h1>
                        <p className={"text-white"}>SCROLL BAR</p>
                    </div>
                </div>
            </section>
        </div>
    )
}