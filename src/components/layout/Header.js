"use client"
import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { useAuth } from '@/AuthContext';
import axios from "axios";
import config from "@/conf";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CartIcon } from "@/components/layout/Cart";
import { Sling as Hamburger } from 'hamburger-react'

export default function Header() {
    const { isAuthenticated, logout } = useAuth();
    const [userInfo, setUserInfo] = useState('');
    const [userId, setUserId] = useState(0)

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (isAuthenticated) {
                try {
                    const token = localStorage.getItem("authToken");
                    const response = await axios.get(`${config.URLApi}/user/info`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });

                    setUserInfo(response.data[0].username);
                    setUserId(response.data[0].id_user);
                } catch (error) {
                    console.error("Error fetching user info:", error);
                }
            }
        };

        fetchUserInfo();
    }, [isAuthenticated, userId]);

    const srcUrl = () => {
        return config.URLAssets + "/images/client/" + userId + "/avatar/avatar.png";
    };

    const onLogout = () => {
        localStorage.removeItem("authToken");
        logout();
    };

    return (
        <>
            <header className="flex items-center justify-between py-4">
                <Link className="text-primary font-bold text-2xl flex items-center" href={'/'}>
                    <Image src={"/logo_blanc.png"} alt={""} width={"50"} height={"50"}/>
                    <p className={""}>FAST</p>
                    <span className="text-white"> SUSHI</span>
                </Link>
                <nav className="gap-8 font-semibold items-center text-white hidden md:flex">
                    <Link href={'/'}>Home</Link>
                    <Navbar />
                    <Link href={'/story'}>Notre histoire</Link>
                    <Link href={'/help'}>Aide</Link>
                </nav>
                <div className={"flex items-center"}>
                    <DropdownMenu>
                        <DropdownMenuTrigger className={"hover:border-0 border-0 focus:outline-none flex md:hidden px-2"}>
                            <Hamburger size={30} color="#FFFFFF"/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={"md:hidden"}>
                            <DropdownMenuLabel className={"text-center"}>Menu</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <Link href={"/"}><DropdownMenuItem>Home</DropdownMenuItem></Link>
                            <Link href={"/starter"}><DropdownMenuItem>Nos produits</DropdownMenuItem></Link>
                            <Link href={"/story"}><DropdownMenuItem>Notre histoire</DropdownMenuItem></Link>
                            <Link href={"/help"}><DropdownMenuItem>Aide</DropdownMenuItem></Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                {isAuthenticated ? (
                    <div className={"flex"}>
                        <DropdownMenu>
                            <DropdownMenuTrigger className={"hover:border-0 border-0 focus:outline-none"}>
                                <Avatar className={"size-16"}>
                                    { userId !== 0 && (
                                        <AvatarImage src={srcUrl()} />
                                    )}
                                    <AvatarFallback>{userInfo}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <CartIcon />
                            <DropdownMenuContent>
                                <DropdownMenuLabel className={"text-center"}>Hello, {userInfo} !</DropdownMenuLabel>
                                <DropdownMenuSeparator/>
                                <Link href={"/account"}><DropdownMenuItem>Profil</DropdownMenuItem></Link>
                                <Link href={"/cart"}><DropdownMenuItem>Panier</DropdownMenuItem></Link>
                                <Link href={"/account"}><DropdownMenuItem>Historique</DropdownMenuItem></Link>
                                <button onClick={onLogout}
                                        className="bg-red-500 rounded-md text-white px-3 py-1 justify-center flex mx-auto my-2 text-sm">Logout
                                </button>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <Link href={'/login'} className="bg-gray-700 rounded-md text-white px-4 py-2">Se connecter</Link>
                )}
                </div>
            </header>
        </>
    );
}
