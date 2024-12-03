import React, { useEffect } from 'react'
import Services from './Components/Services'
import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ServicesShow() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, [])
    return (
        <Services></Services>
    )
}
