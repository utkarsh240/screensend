import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const page = () => {
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
            <div>
            <h2>
              Utkarsh Gupta
            </h2>
            <p>Software Developer </p>
            </div>
          </article>
        </section>
      </div>


    </aside>
    </main>
  )
}

export default page