"use client"
import {useState} from "react";
import axios from "axios";
import {URLApi} from "@/conf";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/navigation";
export default function RegisterPage() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

    const router = useRouter()

    function isNumber(value) {
        return /^\d+$/.test(value);
    }

    function handleFormSubmit (event) {

        event.preventDefault();

        let toastMessage;

        if (!isNumber(telephone) || telephone.length !== 10) {
            toastMessage = 'Merci de renseignez un numéro de téléphone dans le bon format';
            toast.error(toastMessage, {
                theme: "dark"
            });
            return;
        }

        if (password.length < 8) {
            toastMessage = 'Password peu sécurisé';
            toast.warning(toastMessage, {
                theme: "dark"
            });
            return;
        }

        const inputFields = [lastName, firstName, username, password, email, telephone];
        for (const field of inputFields) {
            if (field.length < 1) {
                toastMessage = 'La longueur de certains champs est insuffisante';
                toast.error(toastMessage, {
                    theme: "dark"
                });
                return;
            }
        }

        axios.post(`${URLApi}/user/create`, {
            last_name: lastName,
            first_name: firstName,
            username: username,
            password: password,
            email: email,
            tel: telephone
        }) .then((response) => {
            toast.success(response.data.message, {
                theme: "dark"
            });
            router.push('/')
        }) .catch((error) => {
            toast.error(error.response.data.message, {
                theme: "dark"
            });
        })
    }

    return (
        <div>
            <section className="mt-8">
                <h1 className="text-center text-primary text-4xl font-semibold">Créer votre compte 🗝️</h1>
                <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
                    <h2 className="text-center text-white mt-8 font-semibold text-xl">Informations ℹ️</h2>
                    <input type="lastName" placeholder="Nom" value={lastName}
                           onChange={event => setLastName(event.target.value)}/>
                    <input type="firstName" placeholder="Prénom" value={firstName}
                           onChange={event => setFirstName(event.target.value)}/>
                    <input type="email" placeholder="Email" value={email}
                           onChange={event => setEmail(event.target.value)}/>
                    <input type="telephone" placeholder="Telephone" value={telephone}
                           onChange={event => setTelephone(event.target.value)}/>
                    <h2 className="text-center text-white font-semibold text-xl">Identifiants 🔒</h2>
                    <input type="username" placeholder="Username" value={username}
                           onChange={event => setUsername(event.target.value)}/>
                    <input type="password" placeholder="Password" value={password}
                           onChange={event => setPassword(event.target.value)}/>
                    <button type="submit" className="font-semibold mt-2">Terminer</button>
                </form>
                <ToastContainer />
            </section>
        </div>
    )
}