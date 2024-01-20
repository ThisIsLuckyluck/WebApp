"use client"
import Image from "next/image";

export function CardUi() {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const fetchAllProduct = async () => {
            try {
                const response = await axios.get(`${config.URLApi}/product`);

                if (response.status === 200) {
                    console.log(response.data);
                    setProductData(response.data);  // Set the fetched data in state
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchAllProduct();  // Invoke the fetchAllProduct function
    }, []);  // Make sure to pass an empty dependency array if fetchAllProduct doesn't depend on any props or state

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