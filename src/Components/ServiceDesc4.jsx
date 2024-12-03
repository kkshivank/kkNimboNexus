import React from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function ServiceDesc4({ isOpen3, setIsOpen3 }) {

  return createPortal(
    <div
      onClick={() => setIsOpen3(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${isOpen3 ? '' : 'hidden'
        }`}
    >
      <div className="service-container" onClick={(e) => e.stopPropagation()}>
        <div className="projects-grid">
          <div className="project-card" data-aos="zoom-in">
          <span className='cross' onClick={() => setIsOpen3(false)}><FontAwesomeIcon className='i' icon={faXmark} /></span>
            <h2>ReactJS Development</h2>
            <p>At NimboNexus, we specialize in delivering top-tier ReactJS development services that help businesses build fast, scalable, and responsive web applications. Our team of expert developers is committed to crafting high-performance solutions tailored to your unique requirements.
              <br /><br />By harnessing the power of ReactJS, we create user-centric applications that deliver seamless and interactive experiences across all devices. Whether you need custom web applications, intuitive user interfaces, or efficient component-based architectures, we ensure your application is optimized for speed, scalability, and maintainability.


            </p>
            <h3>Our approach focuses on:</h3>
            <ul>
              <li><b>Building Robust Applications</b> </li>
              <p style={{ marginBottom: '16px' }}>that perform seamlessly under heavy load.</p>

              <li><b>Creating Scalable Solutions</b></li>
              <p style={{ marginBottom: '16px' }}>that evolve with your growing business.</p>

              <li><b>Enhancing User Experience</b></li>
              <p style={{ marginBottom: '16px' }}>with smooth, interactive UIs.</p>

            </ul>
            <p>Partner with us to turn your ideas into reality with cutting-edge ReactJS development.</p>
          </div>
        </div>
      </div>
    </div >,
    document.getElementById('portal4')
  )
}
