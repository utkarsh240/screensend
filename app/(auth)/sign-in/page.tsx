'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { authClient } from '@/lib/auth-client'

const page = () => {
  const handleSignIn = async()=>{
    return await authClient.signIn.social({provider: 'google'})
  }
  return (
    <main className='sign-in'>
    <aside className='testimonial'>
      <Link href="/">
      <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32}/>
      <h1>
        Snapcast
      </h1>
      </Link>
      <div className='description'>
        <section>
          <figure>
            {Array.from({length:5}).map((_,index)=>(
              <Image src="/assets/icons/star.svg" alt='star' width={20} height={20} key={index}/>
            ))}
          </figure>
          <p>I make screen recording easy</p>
          <article>
            <Image src="/assets/images/jason.png" alt='jason' width={64} height={64} className='rounded-full'/>
            <aside>
            <h2>
              Utkarsh Gupta
            </h2>
            <p>Software Developer </p>
            </aside>
            <p>2026 </p>
          </article>
        </section>
      </div>


    </aside>
    <aside className='google-sign-in'>
      <section>
        <Link href="/">
        <Image src="/assets/icons/logo.svg" alt="logo" width={40} height={40}/>
        <h1>
          Screensendd
        </h1>

        <p>Create and share your screen recording video in no time</p>


        <button onClick={handleSignIn}>
            <Image src="/assets/icons/google.svg" alt="google" width={22} height={22}/>
            <span>Sign in with google</span>
        </button>

        </Link>
      </section>
    </aside>
    <div className='overlay'/>
    </main>
  )
}

export default page