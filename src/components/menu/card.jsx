"use client"

export function CardUi() {
    return (
        <>
        <section className={"bg-amber-100 rounded w-full max-w-52"}>
            <div className={"p-4 px-6"}>
                <h1>Sushi</h1>
                <div>
                    <p>Description</p>
                    <button>ajouter au panier</button>
                </div>
            </div>
        </section>
        </>
    );
}