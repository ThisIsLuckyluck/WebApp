"use client"
import {CardUi} from "@/components/menu/card";
import { Separator } from "@/components/ui/separator"


export default function dessertPage(){
    return(
        <div>
            <div className={"flex items-center justify-between"}>
                <h1 className={"text-2xl font-bold text-white pr-2"}>Nos desserts</h1>
                <p className={"italic hidden text-gray-400 sm:text-sm sm:flex"}>Découvrez notre assortiment de desserts, où chaque saveur vous emporte dans un voyage gourmand et inoubliable.</p>
                <div className={"flex text-gray-400 min-w-48 justify-between"}>
                    <a href="/starter" className={"hover:text-white"}>Entree</a>
                    <p>/</p>
                    <a href="/plate"  className={"hover:text-white"}>Plats</a>
                    <p>/</p>
                    <a href="/dessert" className={"text-white hover:text-gray-200"}>Desserts</a>
                </div>
            </div>
            <Separator className={"mb-4 mt-2"}/>
            <CardUi productType="dessert"/>
        </div>
    )
}