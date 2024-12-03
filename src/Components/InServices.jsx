import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSalesforce, faConnectdevelop, faReact } from '@fortawesome/free-brands-svg-icons'
import { faChalkboardUser, faSitemap, faStreetView, faGears } from '@fortawesome/free-solid-svg-icons'

export default function InServices() {
  return (
    <div>
      <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
        <div>
          <div class="row">
            <div class="section-header text-center" style={{marginBottom: '20px'}}>
              <h2 class="fw-bold" style={{ fontSize: "28px" }}>
                Our
                <span class="b-class-secondary"> Services </span>
              </h2>
              <p class="sec-icon"><FontAwesomeIcon icon={faGears} /></p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                <FontAwesomeIcon icon={faSalesforce} />
                </div>
                <h3>Salesforce Consulting Services</h3>
                <p>
                  At NimboNexus, we empower businesses to harness the full potential of Salesforce with tailored strategies and expert guidance. Whether you're new to Salesforce or seeking to enhance your existing setup.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                <FontAwesomeIcon icon={faConnectdevelop} />
                </div>
                <h3>Salesforce Custom Development</h3>
                <p>
                  At NimboNexus, we specialize in creating custom Salesforce solutions that address your unique business needs. Our development services enhance the platform's functionality, ensuring it works seamlessly for your processes and goals.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                <FontAwesomeIcon icon={faChalkboardUser} />
                </div>
                <h3>Salesforce Training</h3>
                <p>
                  Empower your team with the skills they need to excel with Salesforce. At NimboNexus, we offer comprehensive Salesforce training programs designed to equip your team with practical knowledge and hands-on experience.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                <FontAwesomeIcon icon={faReact} />
                </div>
                <h3>ReactJS Development</h3>
                <p>
                  At NimboNexus, we specialize in delivering top-tier ReactJS development services that help businesses build fast, scalable, and responsive web applications. Our team of expert developers is committed to crafting high-performance solutions tailored to your unique requirements.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                <FontAwesomeIcon icon={faSitemap} />
                </div>
                <h3>Hire Resources</h3>
                <p>
                  At NimboNexus, we offer flexible resource hiring services to meet your project demands. Whether you need a skilled Salesforce professional or a talented ReactJS developer, you can hire an expert directly from our team to support your business.
                </p>
              </div>
            </div>
            {/* <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                <FontAwesomeIcon icon={faStreetView} />
                </div>
                <h3>Salesforce Omnistudio</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum, mollitia numquam, accusamus nulla, ad corrupti recusandae alias dolores dolorem fugit! Quis optio alias maxime ex mollitia laudantium debitis rem.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}
