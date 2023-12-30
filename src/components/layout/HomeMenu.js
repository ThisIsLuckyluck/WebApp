'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import {useEffect, useState} from "react";
import {URLApi} from "@/conf";

export default function HomeMenu() {
    const [bestSellers, setBestSellers] = useState([]);
    useEffect(() => {
        fetch(`${URLApi}/product`).then(res => {
            res.json().then(menuItems => {
                setBestSellers(menuItems.slice(-3));
            });
        });
    }, []);
    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
            </div>
            <div className="text-center mb-4">
                <SectionHeaders
                    subHeader={'Voici nos'}
                    mainHeader={'Favoris'} />
            </div>
                {bestSellers?.length > 0 && (
                    <div className="grid sm:grid-cols-3 gap-4">
                        {bestSellers.map((item) => (
                            <div key={item.id_product} className="bg-gray-700 p-4 rounded-lg text-center">
                                <p className="text-4xl font-black text-white">{item.price}$</p>
                                {/* <Image src={`/${item.images.small}`} alt={item.product_name} />*/}
                                <Image src="/sushi.png" alt="sushi" width={300} height={200} className="mx-auto"/>
                                <div className="text-lg font-bold text-center mb-2">{item.product_name}</div>
                                <div className="text-gray-400 py-3">{item.description}</div>
                                <button className="bg-primary rounded-lg p-2 text-white px-5">ajouter au panier</button>
                            </div>
                        ))}
                    </div>
                )}
        </section>
    );
}