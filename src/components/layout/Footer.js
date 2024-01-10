import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section className="mx-auto max-w-4xl text-center text-lg font-bold py-10 grid sm:grid-cols-3 gap-0 text-white">
                <div><p>Contact</p></div>
                <div><p>Mention Légales</p></div>
                <div><p>Nos pages</p></div>
            </section>
            <p className="text-center text-white">© Created by <Link href="https://github.com/StopThatTalace" className="font-bold">Talace</Link> - 2023</p>
        </>
    )
}