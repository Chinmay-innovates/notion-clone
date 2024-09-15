import React from 'react'
import { Navbar } from './_components/navbar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='h-full dark:bg-[#1F1F1F]'>
            <Navbar />
            <main className='h-full pt-4'>{children}</main>
        </main>
    )
}

export default MainLayout