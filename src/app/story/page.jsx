"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {ScrollArea} from "@/components/ui/scroll-area";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function storyPage() {
    return (
        <div className={"flex w-full items-center py-10 pb-32"}>
            <section className={"w-full text-white"}>
                <header className={"max-w-sm flex text-white items-center pb-10"}>
                    <Avatar className={"size-14 mr-3"}>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Makytori</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className={"text-sm font-bold sm:text-lg md:text-xl lg:text-2xl"}>Teruyo Makytori</h1>
                        <p className={"text-xs text-gray-200 sm:text-xs md:text-sm lg:text-sm"}>Co-founder et chief master chez Fast-sushi</p>
                    </div>
                </header>
                <article>
                    <ScrollArea className="h-[400px] max-w-[550px] rounded">
                        <h1 className={"text-sm font-bold py-2 sm:text-lg md:text-xl lg:text-2xl"}>Découverte de FastSushi</h1>
                        <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Bienvenue chez FastSushi, un établissement fondé en 2008 par le passionné de cuisine
                            japonaise, M. Makytori. Spécialisé dans la restauration rapide, FastSushi vous invite à un
                            voyage gustatif exceptionnel, mettant en avant des produits alimentaires d&apos;inspiration
                            japonaise tels que les sushis, les makis, les sashimis, les spring rolls, et bien plus
                            encore. Notre mission est de faire découvrir à notre clientèle la vraie cuisine japonaise,
                            en utilisant des produits locaux de qualité pour offrir une expérience culinaire authentique
                            et inoubliable.</p>
                        <h1 className={"text-sm font-bold py-2 sm:text-lg md:text-xl lg:text-2xl "}>Qualité et Fraîcheur Garanties</h1>
                        <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Chez FastSushi, la qualité et la fraîcheur sont nos priorités. Nous nous engageons à
                            sélectionner soigneusement nos poissons, traités entiers et choisis suivant les arrivages
                            pour maintenir un niveau optimal de fraîcheur. Tous nos produits sont certifiés AB et Label
                            Rouge, attestant de notre engagement envers des ingrédients de qualité supérieure. Notre
                            menu varié est conçu pour satisfaire les amateurs de cuisine japonaise, offrant une
                            expérience gastronomique unique qui ravira vos papilles.</p>
                        <h1 className={"text-sm font-bold py-2 sm:text-lg md:text-xl lg:text-2xl"}>À la Rencontre de M. Makytori</h1>
                        <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Rencontrez M. Makytori, le gérant passionné derrière l&apos;entreprise FastSushi. Fort d&apos;une expertise culinaire et d&apos;une passion pour la cuisine japonaise, M. Makytori a créé un lieu où l&apos;authenticité des saveurs rencontre l&apos;innovation culinaire. Son dévouement à faire découvrir la véritable essence de la cuisine japonaise se reflète dans chaque plat préparé chez FastSushi. Venez partager cette expérience gastronomique exceptionnelle et découvrez la vision unique de M. Makytori pour la cuisine japonaise à travers notre menu diversifié et savoureux.</p>
                    </ScrollArea>
                </article>
            </section>
            <section className={"w-full"}>
                <Carousel className={"max-w-sm mx-auto"}>
                    <CarouselContent>
                        <CarouselItem><Image className={"rounded-sm"} src={"/entree.jpg"} width={"1000"} height={"1000"} alt={""}/></CarouselItem>
                        <CarouselItem><Image className={"rounded-sm"} src={"/entree.jpg"} width={"1000"} height={"1000"} alt={""}/></CarouselItem>
                        <CarouselItem><Image className={"rounded-sm"} src={"/entree.jpg"} width={"1000"} height={"1000"} alt={""}/></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </div>
    )
}