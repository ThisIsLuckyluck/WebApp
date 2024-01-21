"use client"
import {CardUi} from "@/components/menu/card";
import { Separator } from "@/components/ui/separator"


export default function starterPage(){
    return(
        <div>
            <div className={"flex items-center justify-between"}>
                <h1 className={"text-2xl font-bold text-white pr-2"}>Entrée</h1>
                <p className={"italic text-xs text-gray-400 sm:text-sm"}>Découvrez une expérience culinaire inoubliable
                    dès la première bouchée.</p>
                <div className={"flex text-gray-400 min-w-48 justify-between"}>
                    <a href="/starter" className={"text-white hover:text-gray-200"}>Entree</a>
                    <p>/</p>
                    <a href="/plate" className={"hover:text-white"}>Plats</a>
                    <p>/</p>
                    <a href="/dessert" className={"hover:text-white"}>Desserts</a>
                </div>
            </div>
            <Separator className={"mb-4 mt-2"}/>
            <CardUi productType="appetizer"/>
        </div>
    )
}