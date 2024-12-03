import React, { useState } from 'react'
import Footer from './Footer'
import '../service.css'
import '../index.css'
import { Link } from 'react-router-dom'
import Navbar2 from './Navbar2'
import ServiceDesc1 from './ServiceDesc1'
import ServiceDesc2 from './ServiceDesc2'
import ServiceDesc3 from './ServiceDesc3'
import ServiceDesc4 from './ServiceDesc4'
import ServiceDesc5 from './ServiceDesc5'

export default function Services() {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)

    return (
        <div className='bg-gray-900'>
            <div className='min-h-screen bg-gray-900'>
                <Navbar2></Navbar2>
                <section className="bg-gray-900 text-center pt-20 px-8 xl:px-0 flex flex-col justify-center">
                    <span className="text-gray-400 text-3xl max-w-lg mx-auto mb-4 capitalize flex items-center">what we're offering <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-indigo-600 ml-3 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    </span>
                    {/* <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">Services Built Specifically for your Business</h1> */}
                    <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-8xl mx-auto">
                        <div className="card bg-gray-800 p-10 relative">
                            <div className="circle">
                            </div>
                            <div className="relative lg:pr-52">
                                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl"> Salesforce Consulting Services</h2>
                                <p className="text-gray-400">At NimboNexus, we empower businesses to harness the full potential of Salesforce with tailored strategies and expert guidance. Whether you're new to Salesforce or seeking to enhance your existing setup.
                                </p>
                            </div>
                            <div className="pop">
                                <Link className="read-icon" onClick={() => setIsOpen(true)}>Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="text-indigo-600 ml-3 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></Link>
                                <ServiceDesc1 isOpen={isOpen}
                                    setIsOpen={setIsOpen}></ServiceDesc1>
                            </div>
                        </div>
                        <div className="card bg-gray-800 p-10 relative">
                            <div className="circle">
                            </div>
                            <div className="relative lg:pl-48">
                                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Salesforce Custom Development</h2>
                                <p className="text-gray-400">At NimboNexus, we specialize in creating custom Salesforce solutions that address your unique business needs. Our development services enhance the platform's functionality, ensuring it works seamlessly for your processes and goals.</p>
                                <div className="pop">
                                    <Link className="read-icon" onClick={() => setIsOpen1(true)}>Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="text-indigo-600 ml-3 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></Link>
                                    <ServiceDesc2 isOpen1={isOpen1}
                                        setIsOpen1={setIsOpen1}></ServiceDesc2>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-gray-800 p-10 relative">
                            <div className="circle">
                            </div>
                            <div className="relative lg:pr-44">
                                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Salesforce Training</h2>
                                <p className="text-gray-400">Empower your team with the skills they need to excel with Salesforce. At NimboNexus, we offer comprehensive Salesforce training programs designed to equip your team with practical knowledge and hands-on experience.</p>
                                <div className="pop">
                                    <Link className="read-icon" onClick={() => setIsOpen2(true)}>Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="text-indigo-600 ml-3 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></Link>
                                    <ServiceDesc3 isOpen2={isOpen2}
                                        setIsOpen2={setIsOpen2}></ServiceDesc3>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-gray-800 p-10 relative">
                            <div className="circle">
                            </div>
                            <div className="relative lg:pl-48">
                                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">ReactJS Development</h2>
                                <p className="text-gray-400">At NimboNexus, we specialize in delivering top-tier ReactJS development services that help businesses build fast, scalable, and responsive web applications. Our team of expert developers is committed to crafting high-performance solutions tailored to your unique requirements.</p>
                                <div className="pop">
                                    <Link className="read-icon" onClick={() => setIsOpen3(true)}>Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="text-indigo-600 ml-3 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></Link>
                                    <ServiceDesc4 isOpen3={isOpen3}
                                        setIsOpen3={setIsOpen3}></ServiceDesc4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-900 text-center px-8 xl:px-0 flex-col justify-center my-4">
                    <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-8xl mx-auto">
                        <div className="card bg-gray-800 p-10 relative">
                            <div className="circle">
                            </div>
                            <div className="relative lg:pr-52">
                                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Hire Resources</h2>
                                <p className="text-gray-400">At NimboNexus, we offer flexible resource hiring services to meet your project demands. Whether you need a skilled Salesforce professional or a talented ReactJS developer, you can hire an expert directly from our team to support your business.
                                </p>
                            </div>
                            <div className="pop">
                                <Link className="read-icon" onClick={() => setIsOpen4(true)}>Read More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="text-indigo-600 ml-3 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg></Link>
                                <ServiceDesc5 isOpen4={isOpen4}
                                    setIsOpen4={setIsOpen4}></ServiceDesc5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}
