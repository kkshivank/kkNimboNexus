import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setformData] = useState({
        name: '',
        email: '',
        userMessage: ''
    })

    const [errors, setErrors] = useState({})
    const validateConfig = {
        name: [{ required: true, message: 'Please enter your name.' }, { minLength: 3, message: 'Name should be atleast 3 characters long.' }],
        userMessage: [{ required: true, message: 'Please enter a message.' }, { minLength: 10, message: 'Message should be atleast 10 characters long.' }],
        email: [{ required: true, message: 'Please enter an email.' }, { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Invalid email, please enter correct email.' }],
    }

    const validate = (formData) => {
        const errorData = {}

        Object.entries(formData).forEach(([key, value]) => {
            validateConfig[key].some((rule) => {
                if (rule.required && !value) {
                    errorData[key] = rule.message
                    return true
                }


                if (rule.minLength && value.length < rule.minLength) {
                    errorData[key] = rule.message
                    return true
                }

                if (rule.pattern && !rule.pattern.test(value)) {
                    errorData[key] = rule.message
                }
            })
        })

        setErrors(errorData)
        return errorData
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validateResult = validate(formData)
        if (Object.keys(validateResult).length) return

        // emailjs connection code
        emailjs.send('service_lc8lblw', 'template_oxq0xv8', formData, {
            publicKey: '2iq2YcirJyqvsoJO2',
        })
            .then(
                () => {
                    alert('Message sent successfully!');
                },
                (error) => {
                    alert('Failed to send, Please try again!');
                },
            );

        setformData({
            name: '',
            email: '',
            userMessage: ''
        })
    }

    const handleEvent = (e) => {
        const { name, value } = e.target
        setformData((prevState) => ({ ...prevState, [name]: value }))
    }
    return (
        <section id="contact">
            <div className="container">
                <h2 data-aos="fade-right">Contact <span class="b-class-secondary"> Us </span></h2>
                <form action="#" method="POST" className="contact-form" data-aos="fade-left" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" id="name" name='name' value={formData.name} onChange={handleEvent}></input>
                        <label htmlFor="name">Name</label>
                        <span id="name-error" className="error-message">{errors.name}</span>
                    </div>
                    <div className="form-group">
                        <input type="text" id="email" name='email' value={formData.email} onChange={handleEvent}></input>
                        <label htmlFor="email">Email</label>
                        <span id="email-error" className="error-message">{errors.email}</span>
                    </div>
                    <div className="form-group">
                        <textarea id="message" name='userMessage' value={formData.userMessage} onChange={handleEvent}></textarea>
                        <label htmlFor="message">Message</label>
                        <span id="message-error" className="error-message">{errors.userMessage}</span>
                    </div>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
        </section>
    )
}
