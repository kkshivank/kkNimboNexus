import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

export default function Home() {

  useGSAP(() => {
    gsap.from(".header-content h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".header-content h2", { opacity: 0, y: -50, duration: 1 });
  })

  const tagLine1 = ['Welcome to NimboNexus', 'We offer Salesforce']
  const tagLine2 = ['Where ideas meet execution', 'training and certifications']

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  // useEffect for automatic slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Change image every 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <header id="home" style={{ backgroundImage: `url(/images/slideImage${currentIndex}.jpg)` }}>
      <div className="add-dark">
        <Navbar></Navbar>
        <div className="header-content">
          <h1 >{tagLine1[currentIndex]}</h1>
          <h2>{tagLine2[currentIndex]}</h2>
        </div>
      </div>
    </header>
  )
}
