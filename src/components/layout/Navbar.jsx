"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

import {navbarList} from "@/components/layout/navbarList";


export default function Navbar() {
    return(
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-primary hover:bg-primary hover:text-white">Nos produits</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[300px] h-fit">
                        {navbarList.map((item, index) => (
                            <NavigationMenuLink
                                key={index}
                                href={item.href}
                                style={{ backgroundImage: `url(${item.path})` }}
                                className={`bg-cover border-t-0 bg-opacity-50 grid gap-3 p-4 w-[300px] md:grid-cols-2 h-[100px]`}
                            >
                                <div className={"w-full min-w-96"}>
                                    <h1 className="text-white text-2xl hover:text-primary">{item.title}</h1>
                                    <p className="text-gray-200 font-thin text-md">{item.description}</p>
                                </div>
                        </NavigationMenuLink>
                        ))}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}