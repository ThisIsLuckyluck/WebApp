"use client"
import Image from "next/image";

export function CardUi() {
    return (
        <>
        <section className={"bg-gray-300 rounded-lg w-full max-w-52 bg-opacity-30"}>
            <div className={"p-4 px-6"}>
                <p className={"text-3xl text-center text-white font-bold"}>10.99$</p>
                <Image src={"/entree.jpg"} alt={"entree"} width={"1000"} height={"1000"} className={"py-2"}></Image>
                <div>
                    <h1 className={"text-center font-bold text-white text-xl"}>item.name</h1>
                    <div>
                        <p className={"py-3 text-gray-200 text-sm italic"}>item.description</p>
                        <button className={"bg-primary p-2 rounded text-sm font-bold text-white mx-auto w-full hover:bg-red-600"}>ajouter au panier</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}