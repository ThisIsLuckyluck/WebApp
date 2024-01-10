"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image";


export default function Navbar() {
    return(
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-primary">Nos produits</NavigationMenuTrigger>
                    <NavigationMenuContent className="grid w-[200px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[800px]">
                        <NavigationMenuLink>
                            <Image src={"/entree.jpg"} alt={""} width={"2000"} height={"2000"} className="w-full rounded"/>
                            <h1 className="absolute top-5 left-5 text-white">Nos entrées</h1>
                            <p className="text-gray-400 font-thin absolute bottom-0 left-5">Trouver votre meilleur starter</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                            <Image src={"/entree.jpg"} alt={""} width={"2000"} height={"2000"} className="w-full rounded"/>
                            <h1 className="absolute top-5 left-5 text-white">Nos entrées</h1>
                            <p className="text-gray-400 font-thin absolute top-20 left-5">Trouver votre meilleur starter</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                            <Image src={"/entree.jpg"} alt={""} width={"2000"} height={"2000"} className="w-full rounded"/>
                            <h1 className="absolute top-5 left-5 text-white">Nos entrées</h1>
                            <p className="text-gray-400 font-thin absolute top-20 left-5">Trouver votre meilleur starter</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                            <Image src={"/entree.jpg"} alt={""} width={"2000"} height={"2000"} className="w-full rounded"/>
                            <h1 className="absolute top-5 left-5 text-white">Nos entrées</h1>
                            <p className="text-gray-400 font-thin absolute top-20 left-5">Trouver votre meilleur starter</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                            <Image src={"/entree.jpg"} alt={""} width={"2000"} height={"2000"} className="w-full rounded"/>
                            <h1 className="absolute top-5 left-5 text-white">Nos entrées</h1>
                            <p className="text-gray-400 font-thin absolute top-20 left-5">Trouver votre meilleur starter</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                            <Image src={"/entree.jpg"} alt={""} width={"2000"} height={"2000"} className="w-full rounded"/>
                            <h1 className="absolute top-5 left-5 text-white">Nos entrées</h1>
                            <p className="text-gray-400 font-thin absolute top-20 left-5">Trouver votre meilleur starter</p>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}