"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {ScrollArea} from "@/components/ui/scroll-area";
import Image from "next/image";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"


export default function legalNoticePage() {
    return (
        <div className={"flex w-full items-center py-10 pb-32"}>
            <section className={"w-full text-white"}>
                <article>
                    <ScrollArea className="h-[700px] max-w-[1250px] rounded">
                        <h1 className={"text-sm font-bold py-2 sm:text-lg md:text-2xl lg:text-4xl"}>Mention Légal</h1>
                        <br/>
                        <h2 className={"text-sm py-1.5 sm:text-lg md:text-xl lg:text-2xl font-bold"}>Éditeur du site
                            :</h2>
                        <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Adresse : 1 avenue des
                            Champs-Elysées</p>
                        <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Email : contact@fast-sushi.fr</p>
                        <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Directeur de la publication : M.
                            Makytori</p>
                        <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Contact :
                            <a href="./help" className={"text-blue-400 italic underline"}>Cliquer ici</a>
                        </p>
                        <br/>
                        <h2 className={"text-sm py-1.5 sm:text-lg md:text-xl lg:text-2xl font-bold"}>Hébergeur du site
                            :</h2>
                        <a href="https://redheberg.fr">
                            <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl bg-primary max-w-28 text-center rounded-lg hover:bg-orange-600 font-bold"}>
                                RedHeberg
                            </p>
                        </a>
                            <br/>
                            <h2 className={"text-sm py-1.5 sm:text-lg md:text-xl lg:text-2xl font-bold"}>Politique de
                                confidentialité :</h2>
                            <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Fast Sushi s&apos;engage à
                                protéger
                                la vie privée de ses utilisateurs. Les données personnelles collectées ne sont utilisées
                                que dans le cadre de la gestion des commandes et ne seront en aucun cas transmises
                                à des tiers sans consentement préalable. Les utilisateurs disposent d&apos;un droit
                                d&apos;accès,
                                de modification et de suppression de leurs données personnelles en contactant Fast Sushi
                                à l&apos;adresse email mentionnée ci-dessus.</p>
                            <br/>
                            <h2 className={"text-sm py-1.5 sm:text-lg md:text-xl lg:text-2xl font-bold"}>Termes et
                                Conditions :</h2>
                            <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>En utilisant le site Fast
                                Sushi,
                                vous acceptez les termes et conditions suivants :
                                Vous vous engagez à utiliser le site conformément à la législation en vigueur et
                                à ne pas porter atteinte aux droits de Fast Sushi ou de tiers.
                                Fast Sushi se réserve le droit de modifier, suspendre ou interrompre le site à tout
                                moment,
                                sans préavis. Fast Sushi ne peut être tenu responsable des dommages
                                directs ou indirects résultant de l&apos;utilisation du site.
                                En passant commande sur Fast Sushi, vous acceptez les conditions de vente et de
                                livraison
                                en vigueur.</p>
                            <br/>
                            <h2 className={"text-sm py-1.5 sm:text-lg md:text-xl lg:text-2xl font-bold"}>Protection des
                                données
                                personnelles :</h2>
                            <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Conformément à la législation
                                en vigueur, Fast Sushi s&apos;engage à protéger la vie privée de ses utilisateurs.
                                Les données personnelles collectées ne sont utilisées que dans le cadre de la gestion
                                des commandes et ne seront en aucun cas transmises à des tiers sans consentement
                                préalable.</p>
                            <br/>
                            <h2 className={"text-sm py-1.5 sm:text-lg md:text-xl lg:text-2xl font-bold"}>Propriété
                                intellectuelle
                                :</h2>
                            <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Tous les éléments du site
                                Fast Sushi, qu&apos;ils soient visuels ou textuels, sont la propriété exclusive de Fast
                                Sushi
                                et sont protégés par les lois relatives à la propriété intellectuelle.
                                Toute reproduction ou utilisation sans autorisation préalable est strictement
                                interdite.</p>
                            <br/>
                            <h2 className={"text-sm py-1.5 sm:text-lg md:text-xl lg:text-2xl font-bold"}>Cookies :</h2>
                            <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Le site Fast Sushi utilise
                                des cookies pour améliorer l&apos;expérience utilisateur et faciliter la navigation.
                                En utilisant notre site, vous consentez à l&apos;utilisation de ces cookies.</p>
                            <br/>
                            <h2 className={"text-sm py-1.5 sm:text-lg md:text-xl lg:text-2xl font-bold"}>Litiges :</h2>
                            <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>En cas de litige concernant
                                le
                                site Fast Sushi, le droit français est applicable. En cas de litige, une solution
                                amiable
                                sera recherchée en priorité.</p>
                            <br/>
                            <h2 className={"text-sm py-1.5 sm:text-lg md:text-xl lg:text-2xl font-bold"}>Contact :</h2>
                            <p className={"text-xs py-2 sm:text-sm md:text-lg lg:text-xl"}>Pour toute question ou
                                réclamation concernant le site Fast Sushi, veuillez nous contacter
                                <a href={"./help"} className={"text-blue-400 italic underline"}>ici</a>
                            </p>
                    </ScrollArea>
                </article>
            </section>
        </div>
    )
}