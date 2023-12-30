import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <header className="flex items-center justify-between py-4">
                <Link className="text-primary font-bold text-2xl" href={''}>
                    <Image src="" alt=""/>
                    FAST
                    <span className="text-white"> SUSHI</span></Link>
                <nav className="flex gap-8 font-semibold items-center text-white">
                    <Link href={''}>Home</Link>
                    <div className="bg-primary rounded p-2">
                        <a className="text-white hover:text-slate-300" href="#">Nos produits</a>
                        <button className="shrink-0 p-1">
                            <span className="sr-only">Show submenu for Flyout Menu</span>
                            <svg className="w-3 h-3 fill-slate-100" xmlns="http://www.w3.org/2000/svg" width="12"
                                 height="12">
                                <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z"/>
                            </svg>
                        </button>
                    </div>
                    <Link href={''}>Notre histoire</Link>
                    <Link href={''}>Contact</Link>
                </nav>
                <Link href={''} className="bg-gray-700 rounded-md text-white px-4 py-2">Se connecter</Link>
            </header>
        </>
    )
}