import React from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function ServiceDesc5({ isOpen4, setIsOpen4 }) {

  return createPortal(
    <div
      onClick={() => setIsOpen4(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${isOpen4 ? '' : 'hidden'
        }`}
    >
      <div className="service-container" onClick={(e) => e.stopPropagation()}>
        <div className="projects-grid">
          <div className="project-card" data-aos="zoom-in">
          <span className='cross' onClick={() => setIsOpen4(false)}><FontAwesomeIcon className='i' icon={faXmark} /></span>
            <h2>Hire Resources</h2>
            <p>At NimboNexus, we offer flexible resource hiring services to meet your project demands. Whether you need a skilled Salesforce professional or a talented ReactJS developer, you can hire an expert directly from our team to support your business.</p>
            <ul>
              <li><b>Salesforce Resources</b> </li>
              <p style={{ marginBottom: '16px' }}>Access certified Salesforce developers, consultants, and admins who can help you implement, customize, and optimize Salesforce solutions.</p>

              <li><b>ReactJS Resources</b></li>
              <p style={{ marginBottom: '16px' }}>Hire experienced ReactJS developers to build high-performance, responsive web applications tailored to your needs.</p>
            </ul>
            <p>By hiring from us, you gain access to top-tier professionals with specialized expertise, allowing you to scale your team and ensure your project’s success without the long-term commitment.</p>
          </div>
        </div>
      </div>
    </div >,
    document.getElementById('portal5')
  )
}
