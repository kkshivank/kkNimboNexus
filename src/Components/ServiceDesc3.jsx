import React from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function ServiceDesc3({ isOpen2, setIsOpen2 }) {

  return createPortal(
    <div
      onClick={() => setIsOpen2(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${isOpen2 ? '' : 'hidden'
        }`}
    >
        <div className="service-container" onClick={(e) => e.stopPropagation()}>
          <div className="projects-grid">
            <div className="project-card" data-aos="zoom-in">
            <span className='cross' onClick={() => setIsOpen2(false)}><FontAwesomeIcon className='i' icon={faXmark} /></span>
              <h2>Salesforce Training</h2>
              <p>Empower your team with the skills they need to excel with Salesforce. At NimboNexus, we offer comprehensive Salesforce training programs designed to equip your team with practical knowledge and hands-on experience</p>
              <h3>Our Training Programs</h3>
              <ul>
                <li><b>Beginner to Advanced Levels</b> </li>
                <p style={{ marginBottom: '16px' }}>Tailored training sessions for all skill levels, from new users to advanced admins and developers.</p>

                <li><b>Hands-On Learning</b></li>
                <p style={{ marginBottom: '16px' }}>Interactive, real-world exercises to ensure your team can apply their knowledge effectively.</p>

                <li><b>Customized Training</b></li>
                <p style={{ marginBottom: '16px' }}>Programs designed around your specific Salesforce setup and business needs.</p>

                <li><b>Role-Based Training</b></li>
                <p style={{ marginBottom: '16px' }}>Focused modules for Sales, Marketing, Service, Admins, Developers and Omnistudio.</p>

                <li><b>Ongoing Support</b></li>
                <p style={{ marginBottom: '16px' }}>Access to resources and guidance even after training completion.</p>

              </ul>
            </div>
          </div>
        </div>
    </div>,
    document.getElementById('portal3')
  )
}
