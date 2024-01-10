import Link from "next/link";

export default function LoginPage () {
    return (
        <div>
            <Link href={'/register'}>Créer un compte</Link>
        </div>
    )
}