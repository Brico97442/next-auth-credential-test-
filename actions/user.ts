"use server";

import connectDB from "@/lib/db";
import { User } from '@/models/User'
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

const register = async (formData: FormData) => {
    const firstName = formData.get('firstname') as string;
    const lastName = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!firstName || !lastName || !email || !password) {
        throw new Error('Veuillez remplir tout les champs')
    }
    await connectDB();

    const existingUser = await User.findOne({ email })

    if (existingUser) throw new Error("Utilisateurs existant")

        const hashedPassword = await hash(password, 12)
    await User.create({ firstName, lastName, email, password:hashedPassword })

    console.log('Utilisateur crée avec succès')

    redirect('/login')

}

export { register }