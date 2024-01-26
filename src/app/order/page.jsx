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
        let value;
        let string;

        switch (stateOrder) {
            case 1:
                string = 'En attente de prise en charge';
                value = 25;
                break;
            case 2:
                string = 'En cours de préparation';
                value = 65;
                break;
            case 3:
                string = 'Commande prête';
                value = 100;
                break;
            default:
                string = 'None';
                value = 0;
                break;
        }

        return {value, string};
    };


    return(
        <div className={"rounded-lg"}>
            <section className={"max-w-5xl mx-auto"}>
                <div className={"max-w-sm mx-auto"}>
                    <h1 className={"text-center text-lg md:text-3xl font-bold text-white"}>Votre commande:</h1>
                </div>
                <div className={"lg:flex justify-between py-5 w-full items-start"}>
                    <div className={"bg-gray-400 rounded-lg w-full lg:max-w-md h-40 mb-5"}>
                        <h1 className={"text-center font-bold text-white text-lg md:text-xl pb-3 pt-3"}>Etat de votre commande</h1>
                        <p className={'text-center bg-gray-600 max-w-64 mx-auto py-2 rounded-md text-white font-bold my-2'}>{stringState}</p>
                        <Progress value={valueBar} className={"h-6 w-[80%] mx-auto rounded-md"}/>
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