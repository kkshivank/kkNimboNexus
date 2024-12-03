import React from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function ServiceDesc1({ isOpen, setIsOpen }) {

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${isOpen ? '' : 'hidden'
        }`}
    >
      <div className="service-container" onClick={(e) => e.stopPropagation()}>
        <div className="projects-grid">
          <div className="project-card" data-aos="zoom-in">
        <span className='cross' onClick={() => setIsOpen(false)}><FontAwesomeIcon className='i' icon={faXmark} /></span>
            <h2>Salesforce Consulting Services</h2>
            <p>At NimboNexus, we empower businesses to harness the full potential of Salesforce with tailored strategies and expert guidance. Whether you're new to Salesforce or seeking to enhance your existing setup, we provide:</p>
            <ul>
              <li><b>Needs Analysis:</b> Aligning Salesforce with your business goals.</li>
              <li><b>Customization:</b> Building workflows, apps, and features tailored to you.</li>
              <li><b>Integration:</b> Seamlessly connecting Salesforce with your tools.</li>
              <li><b>Optimization:</b> Refining performance for maximum ROI.</li>
              <li><b>Training:</b> Ensuring smooth adoption and effective use.</li>
            </ul>
            <p>Transform the way you work with our end-to-end Salesforce solutions.</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal1')
  )
}
