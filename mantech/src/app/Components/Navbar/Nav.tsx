import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div>
        <header className='flex gap-5 px-7 py-5 text-start text-3xl bg-black text-red-700' >
            <Link href="\"> Home </Link>
            <Link href="\Tittle"> Tittle </Link>
            <Link href="\Tittle\Address"> Address </Link>
            <Link href="\Tittle\about-us"> About-us </Link>
        </header>
    </div>
  )
}

export default Nav