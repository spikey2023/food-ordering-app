"use client";

import Image from "next/image"
import {useState} from "react"

export default function RegistePage() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    function handleFormSubmit(ev){
        ev.preventDefault()
        //send a requeust to the register route inside the api directory
        fetch('/api/register', {
            method: 'POST',
            body:JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json',},     
        } )

    }

    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email} 
                    onChange={ev => setEmail(ev.target.value)}></input>
                <input type="password" placeholder="password" value={password} 
                    onChange={ev => setPassword(ev.target.value)}></input>
                <button type="submit">Register</button>
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