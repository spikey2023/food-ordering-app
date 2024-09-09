"use client";

import Image from "next/image"
import Link from "next/link";
import {useState} from "react"

export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [creatingUser, setCreatingUser] = useState(false)
    const [userCreated, setUserCreated] = useState(false)
    const [error, setError] = useState(false)
    
    async function handleFormSubmit(ev){
        ev.preventDefault()
        setCreatingUser(true)
        setError(false)
        setUserCreated(false)
        //send a requeust to the register route inside the api directory
            const response = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: {'Content-Type': 'application/json'},     
            } )
            if (response.ok) {
                setUserCreated(true) 
            }else {
                setError(true)
            }
            setCreatingUser(false) 
            
        
    }

    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>
            {userCreated && (
                <div className="my-4 text-center" >
                    User Created.<br /> Now you can {' '}
                    <Link className ="underline" 
                        href={'/login'}>Login &raquo;</Link>
                </div>
            )}
            {error && (
                <div className="my-4 text-center">
                     An error has occured.<br />
                    Please try again
                </div>
            )}
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email}
                    disabled ={creatingUser} 
                    onChange={ev => setEmail(ev.target.value)}></input>
                <input type="password" placeholder="password" value={password}
                    disabled ={creatingUser}  
                    onChange={ev => setPassword(ev.target.value)}></input>
                <button type="submit" 
                    disabled={creatingUser}
                    > Register</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider </div>
                <button className="flex gap-4 justify-center">
                    <Image  src={'/google.png'} width={24} height={24}
                    alt={'log in with google'}/>
                    Login with Google</button>
            </form>
        </section>
    )
}