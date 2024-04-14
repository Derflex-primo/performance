import React from 'react'
import Container from './Container'

const Home = () => {
  return (
    <Container layout='flex-col' class="h-[100vh] w-full items-center justify-center">
        <h1 className='leading-relaxed md:leading-relaxed text-pretty md:text-balance  text-4xl md:text-6xl extra-xs:pl-8 xs:pl-0 text-start md:text-center font-semibold mb-[180px]'>
           Looking to truly stand out? It&apos;s essential <br className='hidden md:block' /> to do more than just show up online.   
        </h1>
    </Container>
  )
}

export default Home