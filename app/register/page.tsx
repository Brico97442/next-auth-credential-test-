import { Input} from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import React from 'react'

const RegisterPage = () => {
    return (
        <div>
            <h1>Veulliez vous connecter</h1>
            <form>
                <Label htmlFor='firstname'>First Name</Label>
                <Input id='firstname' name='firstname' type='text'/>
                <Label htmlFor='lastname'>Last Name</Label>
                <Input id='lastname' name='lastname' type='text'/>
                
                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='email' type='email'/>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='password' type='password'/>
                
                <Button>S&apos;inscrire</Button>
            </form>

        </div>
    )
}

export default RegisterPage
