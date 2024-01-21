"use client"
import {CardUi} from "@/components/menu/card";
import { Separator } from "@/components/ui/separator"


export default function platePage(){
    return(
        <div>
            <div className={"flex items-center justify-between"}>
                <h1 className={"text-2xl font-bold text-white pr-2"}>Nos plats</h1>
                <p className={"italic text-xs text-gray-400 sm:text-sm"}>Plongez dans notre sélection de plats, où chaque morsure raconte une histoire unique.</p>
                <div className={"flex text-gray-400 min-w-48 justify-between"}>
                    <a href="/starter" className={"hover:text-white"}>Entree</a>
                    <p>/</p>
                    <a href="/plate" className={"text-white hover:text-gray-200"}>Plats</a>
                    <p>/</p>
                    <a href="/dessert" className={"hover:text-white"}>Desserts</a>
                </div>
            </div>
            <Separator className={"mb-4 mt-2"}/>
            <CardUi productType="plate"/>
        </div>
    )
}