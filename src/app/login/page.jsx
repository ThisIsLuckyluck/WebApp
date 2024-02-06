"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import Link from "next/link";
import axios from "axios";
import config from "@/conf";
import { useAuth } from '@/AuthContext';

const FormSchema = z.object({

    username: z.string().min(2, {
        message: "Username manquant",
    }),
    password: z.string().min(2,{
        message: "Mot de passe manquant",
    }),
});

export default function LoginPage () {

    const { login } = useAuth();

    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    async function onSubmit(data) {

        try {
            const response = await axios.post(`${config.URLApi}/login`, {
                username: data.username,
                password: data.password
            });

            if (response.status === 200) {
                const { token } = response.data;
                login();
                localStorage.setItem("authToken", token);
                router.push('/');
                /*TODO: get the id and hash it etc etc*/
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.error("Invalid username or password");
            } else if (error.response){
                toast.error("Unexpected response status:");
            }
        }
    }


    return (
        <section className="w-full max-w-sm mx-auto grid place-items-center my-16 bg-gray-700 bg-gradient-to-b rounded-lg p-5 shadow-2xl">
        <ToastContainer />
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5 space-y-9" method="POST">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="text-white">
                            <FormLabel className="text-lg">Username</FormLabel>
                            <FormControl>
                                <Input type="username" className="text-black border-2 rounded py-5 text-lg" placeholder="username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="text-white">
                            <FormLabel className="text-lg">Mot de passe</FormLabel>
                            <FormControl>
                                <Input type="password" className="text-black border-2 rounded py-5 text-lg" placeholder="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="text-lg" type="submit">Se connecter</Button>
                <Separator className="my-5"/>
                <Link className="bg-gray-400 hover:bg-gray-500 p-2 w-full text-white rounded flex justify-center" href={"/register"} >Créer un compte ?</Link>
            </form>
            <FormDescription className="flex justify-center m-2 text-white">
                Vous n&apos;avez pas de compte chez nous ?
            </FormDescription>
        </Form>
        </section>
    );
}
