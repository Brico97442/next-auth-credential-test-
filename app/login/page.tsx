import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
    return (
        <div className="p-6 max-w-[1000px] bg-blue-400">
            <h1>Veulliez vous connecter</h1>
            <form className='p-6 gap-2 flex flex-col'>

                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='email' type='email' />
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='password' type='password' />

                <Button type='submit'>Se connecter</Button>

                <p>Vous n&apos;avez pas encore de compte ?<Link className="underline" href="/register"> inscrivez vous</Link></p>
            </form>

        </div>
    )
}

export default LoginPage
