"use client"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {faqList} from "./faqList"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { ScrollArea } from "@/components/ui/scroll-area"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import { Textarea } from "@/components/ui/textarea"
import {useState} from "react";


export default function ContactPage() {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [ticketBody, setTicketBody] = useState('');

    const handleSubjectChange = (value) => {
        setSelectedSubject(value);
    };

    const handleBodyChange = (event) => {
        setTicketBody(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Subject:', selectedSubject);
        console.log('Ticket Body:', ticketBody);
    };

    return (
        <div className={"text-white py-10 pb-40"}>
            <h1 className={"font-bold text-center text-lg lg:text-4xl pb-5"}>
                <p className={"w-full max-w-xs mx-auto rounded-lg border-4 p-0 m-0 mb-3"}>Besoin d'aide ?</p>
                <p>Nos <span className={"bg-primary rounded-sm p-2 py-0"}>collaborateur</span> sont là pour vous aider</p>
            </h1>
            <div className={"w-full"}>
                <Tabs defaultValue="ticket" className=" max-w-xl mx-auto my-5 h-[400px]">
                    <TabsList className={"w-full"}>
                        <TabsTrigger value="ticket">Créez un ticket</TabsTrigger>
                        <TabsTrigger value="password">Mot de passe oublié</TabsTrigger>
                        <TabsTrigger value="faq">FAQ</TabsTrigger>
                    </TabsList>
                    <section className={"bg-gray-600 py-2 my-5 mx-auto rounded-md"}>
                        <div className={"w-full max-w-lg mx-auto my-5"}>
                        <TabsContent value="ticket">
                            <form onSubmit={handleSubmit}>
                                <h1 className={"font-bold text-sm lg:text-xl"}>Création d'un ticket</h1>
                                <div className={"my-5"}>
                                    <p className={"text-xs lg:text-sm"}>Sujet de votre ticket</p>
                                    <Select onValueChange={handleSubjectChange}>
                                        <SelectTrigger className="w-[180px] border-0 rounded my-2 bg-gray-800">
                                            <SelectValue placeholder="Choisissez un sujet"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="order_issue">Problème de commande</SelectItem>
                                            <SelectItem value="complaint">réclamation</SelectItem>
                                            <SelectItem value="business">Business</SelectItem>
                                            <SelectItem value="rgpd">RGPD</SelectItem>
                                            <SelectItem value="other">Autres</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className={"my-5"}>
                                    <p className={"text-xs lg:text-sm py-2"}>Corps du ticket</p>
                                    <Textarea
                                        value={ticketBody}
                                        onChange={handleBodyChange}
                                        className={"w-full border-0 bg-gray-800 max-h-[100px] min-h-[100px] rounded resize-none"}
                                        placeholder="Entrez votre message ici."
                                    />
                                </div>
                                <button type="submit"
                                        className="bg-primary p-2 rounded text-sm font-bold text-white hover:bg-red-600">
                                    Soumettre le ticket
                                </button>
                            </form>
                        </TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                            <TabsContent value="faq" className={""}>
                                <h1 className={"text-sm font-bold text-center bg-primary rounded py-2 my-2 max-w-sm mx-auto"}>Retrouvez
                                    les questions/réponses les + fréquentes</h1>
                                <ScrollArea className="h-[390px] w-full rounded-md ">
                                    {faqList.map((item, index) => (
                                        <AlertDialog key={index}>
                                            <AlertDialogTrigger
                                                className={"w-full bg-gray-800 text-white rounded my-2 py-3 hover:bg-white hover:text-black"}>{item.name}</AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>{item.title}</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        {item.content}
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Retour</AlertDialogCancel>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    ))}
                                </ScrollArea>
                            </TabsContent>
                        </div>
                    </section>
                </Tabs>
            </div>
        </div>
    )
}