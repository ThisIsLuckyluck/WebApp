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

export default function Header() {
    const { isAuthenticated, logout } = useAuth();
    const [userInfo, setUserInfo] = useState('');

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (isAuthenticated) {
                try {
                    const token = localStorage.getItem("authToken");
                    const response = await axios.get(`${config.URLApi}/user/info`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });

                    setUserInfo(response.data[0].username);
                } catch (error) {
                    console.error("Error fetching user info:", error);
                }
            }
        };

        fetchUserInfo();
    }, [isAuthenticated]);

    const onLogout = () => {
        localStorage.removeItem("authToken");
        logout();
    };

    return (
        <>
            <header className="flex items-center justify-between py-4">
                <Link className="text-primary font-bold text-2xl flex items-center" href={'/'}>
                    <Image src={"/logo_blanc.png"} alt={""} width={"50"} height={"50"}/>
                    <p className={"hidden md:flex"}>FAST</p>
                    <span className="text-white hidden md:flex"> SUSHI</span>
                </Link>
                <nav className="flex gap-8 font-semibold items-center text-white">
                    <Link href={'/'}>Home</Link>
                    <Navbar />
                    <Link href={'/story'}>Notre histoire</Link>
                    <Link href={'/contact'}>Contact</Link>
                </nav>
                {isAuthenticated ? (
                    <div className={"flex"}>
                        <DropdownMenu>
                            <DropdownMenuTrigger className={"hover:border-0 border-0 focus:outline-none"}>
                                <Avatar className={"size-12"}>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <CartIcon />
                            <DropdownMenuContent>
                                <DropdownMenuLabel className={"text-center"}>{userInfo}</DropdownMenuLabel>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem><Link href={"/account"}>Profil</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href={"/cart"}>Panier</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href={"/historic"}>Historique</Link></DropdownMenuItem>
                                <button onClick={onLogout}
                                        className="bg-red-500 rounded-md text-white px-3 py-1 justify-center flex mx-auto my-2 text-sm">Logout
                                </button>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <Link href={'/login'} className="bg-gray-700 rounded-md text-white px-4 py-2">Se connecter</Link>
                )}
            </header>
        </>
    );
}
