import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

export default function Header() {
    return (
        <>
            <header className="flex items-center justify-between py-4">
                <Link className="text-primary font-bold text-2xl" href={'/'}>
                    <Image src={""} alt={""}/>
                    FAST
                    <span className="text-white"> SUSHI</span></Link>
                <nav className="flex gap-8 font-semibold items-center text-white">
                    <Link href={''}>Home</Link>
                    <Navbar />
                    <Link href={''}>Notre histoire</Link>
                    <Link href={''}>Contact</Link>
                </nav>
                <Link href={'/login'} className="bg-gray-700 rounded-md text-white px-4 py-2">Se connecter</Link>
            </header>
        </>
    )
}