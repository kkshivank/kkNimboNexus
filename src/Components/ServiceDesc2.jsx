import React from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export default function ServiceDesc2({ isOpen1, setIsOpen1 }) {

  return createPortal(
    <div
      onClick={() => setIsOpen1(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${isOpen1 ? '' : 'hidden'
        }`}
    >
      <div className="service-container" style={{ width: '100%' }} onClick={(e) => e.stopPropagation()}>
        <div className="projects-grid" style={{ width: '100%' }}>
          <div className="project-card" data-aos="zoom-in">
          <span className='cross' onClick={() => setIsOpen1(false)}><FontAwesomeIcon className='i' icon={faXmark} /></span>
            <h2>Salesforce Custom Development</h2>
            <p>At NimboNexus, we specialize in creating custom Salesforce solutions that address your unique business needs. Our development services enhance the platform's functionality, ensuring it works seamlessly for your processes and goals.</p>
            <h3>What We Offer</h3>
            <ul>
              <li><b>Custom Applications</b> </li>
              <p style={{ marginBottom: '16px' }}>Build tailored apps using Apex, Lightning Web Components, and Visualforce to solve specific challenges and improve workflows.</p>

              <li><b>Custom Objects & Workflows</b></li>
              <p style={{ marginBottom: '16px' }}>Extend Salesforce capabilities with objects, fields, and workflows designed to fit your operations perfectly.</p>

              <li><b>Automation Solutions</b></li>
              <p style={{ marginBottom: '16px' }}>Save time and reduce errors by automating repetitive tasks with Salesforce Flow, Process Builder, and custom triggers.</p>

              <li><b>User-Friendly Interfaces</b></li>
              <p style={{ marginBottom: '16px' }}>Create intuitive interfaces with Lightning Experience to improve user adoption and efficiency.</p>

              <li><b>Scalable Solutions</b></li>
              <p style={{ marginBottom: '16px' }}>Develop features that grow with your business, ensuring long-term reliability and performance.</p>

            </ul>
            <h3>Why Choose Us?</h3>
            <p>Our expert developers deliver innovative, scalable, and business-aligned solutions, ensuring Salesforce becomes a powerful tool for your success.</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal2')
  )
}
