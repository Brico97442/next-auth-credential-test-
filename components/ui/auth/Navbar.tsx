import React from 'react'
import Link from 'next/link'
import { Button } from '../button'

const Navbar = () => {
    return (
        <nav className='flex justify-between p-6'>
            <Link href="/">Accueil</Link>
            <ul className='flex gap-4 items-center'>
                <Link href="/login">Se connecter</Link>
                <Link href="/register">S&apos;inscrire</Link>
                <form><Button type='submit' variant={"ghost"}>Se déconnecter</Button></form>
            </ul>
        </nav>
    )
}

export default Navbar
