import Image from "next/image";


export default function Hero() {
    return (
        <section className="hero md:mt-4 text-white">
            <div className="py-8 md:py-12">
                <h1 className="text-4xl font-semibold">
                    Custom ton <span className="text-primary">Sushi </span>
                </h1>
                <p className="my-6 text-gray-300 text-base">
                    Le sushi is the missing piece that makes every day complete, a simple yet delicious joy in life
                </p>
                <div className="flex gap-4 text-sm">
                    <button
                        className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-md">
                        Order now
                    </button>
                    <button className="flex items-center border-0 gap-2 py-2 font-semibold">
                        Learn more
                    </button>
                </div>
            </div>
            <div className="relative hidden md:block">
                <Image src={'/sushi.png'} layout={'fill'} objectFit={'contain'} alt={'sushi'}/>
            </div>
        </section>
    )
}