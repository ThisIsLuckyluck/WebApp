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
import { Input } from "@/components/ui/input"

import {
    AlertDialog,
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
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {toast} from "react-toastify";

const FormSchema = z.object({

    email: z.string().min(2, {
        message: "email manquant",
    }),
});

export default function ContactPage() {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [ticketBody, setTicketBody] = useState('');

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

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

    async function onSubmit(data) {

        try {
            data.email
        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.error("Invalid username or password");
            } else if (error.response){
                toast.error("Unexpected response status:");
            }
        }
    }

    return (
        <div className={"text-white py-10 pb-40"}>
            <h1 className={"font-bold text-center text-lg lg:text-4xl pb-5"}>
                <p className={"w-full max-w-xs mx-auto rounded-lg border-4 p-0 m-0 mb-3"}>Besoin d&apos;aide ?</p>
                <p>Nos <span className={"bg-primary rounded-sm p-2 py-0"}>collaborateur</span> sont là pour vous aider</p>
            </h1>
            <div className={"w-full"}>
                <Tabs defaultValue="ticket" className="max-w-xl mx-auto my-5 h-[400px]">
                    <TabsList className={"w-full"}>
                        <TabsTrigger value="ticket">Créez un ticket</TabsTrigger>
                        <TabsTrigger value="password">Mot de passe oublié</TabsTrigger>
                        <TabsTrigger value="faq">FAQ</TabsTrigger>
                    </TabsList>
                    <section className={"bg-gray-600 py-2 my-5 mx-auto rounded-md"}>
                        <div className={"w-full mx-auto my-5 max-w-sm md:max-w-lg"}>
                        <TabsContent value="ticket">
                            <form onSubmit={handleSubmit}>
                                <h1 className={"font-bold text-sm lg:text-xl"}>Création d&apos;un ticket</h1>
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
                        <TabsContent value="password">
                            <h1 className={"font-bold py-4"}>Récupération de mot de passe avec votre email</h1>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-9" method="POST">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="text-white">
                                                <FormLabel className="text-lg">Email</FormLabel>
                                                <FormControl>
                                                    <Input className="border-2 rounded py-5 text-lg" placeholder="email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button className="text-lg" type="submit">Envoyer l&apos;email</Button>
                                </form>
                            </Form>
                        </TabsContent>
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