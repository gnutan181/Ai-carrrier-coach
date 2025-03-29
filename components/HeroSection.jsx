"use client"
import React, { useEffect, useRef } from 'react'

import { Button } from './ui/button'
// import { Link } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {

   const imageRef=  useRef()
//     useEffect(()=>{
//    const scrollPosition = window.scrollY;
//    const scrollThresold =100;
//     },[])
useEffect(() => {
    const handleScroll = () => {
        const imageElement = imageRef.current;

      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
    
      if (scrollPosition > scrollThreshold) {
        // console.log("Scroll threshold exceeded");
        imageElement.classList.add("scrolled")
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <section className='w-full pt-30 md:pt-38 pb-10 text-foreground'>
    <div className='space-y-6 text-center'>
        <div className='space-y-6 mx-auto text-white'>
 <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'>Your AI carrier Coach for
    <br /> Professional Success
 </h1>
 <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
    Advance your career with personalize guidance, interview prep and AI-powered tools for job success.
 </p>
        </div>
      <div className='flex justify-center space-x-4'>
        <Link href='/dashboard'>
        <Button size='lg' className="px-8">
            Get Started
            </Button> 
            </Link>
            {/* <Link href='/dashboard'>
        <Button size='lg' className="px-8 bg-accent-foreground hover:text-accent-foreground" variant='outline'>
            Get Started
            </Button> 
            </Link> */}
      </div>
        {/* <div> */}
            <div className='hero-image-wrapper mt-5 md:mt-0'>
                <div ref={imageRef} className='hero-image mb-5'>
                <Image src="/banner.jpeg"
                width={1280} height={720}  
        // className="block"
        className='rounded-lg shadow-2xl border mx-auto' 
        // object-contain
                alt="Banner_Sensai" 
                priority
                />
                {/* </div> */}
                
            </div>
        </div>
    </div>
    </section>
  )
}

export default HeroSection
