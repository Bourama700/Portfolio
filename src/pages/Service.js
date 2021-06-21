import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase}   from  '@fortawesome/free-solid-svg-icons';
import {faLaptopCode}   from  '@fortawesome/free-solid-svg-icons';
import {faLaptop}   from  '@fortawesome/free-solid-svg-icons';

export const Service = () => {
    return (
 <div id="service" className="service-body" data-aos="fade-bottom"> 
    <section id="services" className="services-mf pt-5 route">
      <div className="container" data-aos="fade-right">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Services
              </h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i><FontAwesomeIcon icon={faBriefcase} /></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Design</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i><FontAwesomeIcon icon={faLaptopCode} /></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Development</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i><FontAwesomeIcon icon={faLaptopCode} /></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Responsive Design</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i><FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Graphic Design</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
   </div>  
    )
}
