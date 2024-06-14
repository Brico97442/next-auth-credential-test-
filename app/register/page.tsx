import {register} from "@/actions/user"
import { Input} from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
const RegisterPage = async () => {
    return (
        <div className="p-6 max-w-[1000px] bg-red-400">
            <h1>Veulliez remplir les champs pour vous inscrire</h1>
            <form className='p-6 gap-2 flex flex-col' action={register}>
                <Label htmlFor='firstname'>First Name</Label>
                <Input id='firstname' name='firstname' type='text'/>
                <Label htmlFor='lastname'>Last Name</Label>
                <Input id='lastname' name='lastname' type='text'/>
                
                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='email' type='email'/>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='password' type='password'/>
                
                <Button type='submit'>S&apos;inscrire</Button>

                <p>Déjà inscrit ?<Link href="/login">Se connecter</Link></p>
            </form>

        </div>
    )
}

export default RegisterPage
