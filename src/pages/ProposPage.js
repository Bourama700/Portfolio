import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck}   from  '@fortawesome/free-solid-svg-icons';
import {faBook}   from  '@fortawesome/free-solid-svg-icons';
import {faUserAlt}   from  '@fortawesome/free-solid-svg-icons';
import {faAward}   from  '@fortawesome/free-solid-svg-icons';


const ProposPage = () => {
    
    return (
    <div  id="about" className="main-section route" data-aos="fade-bottom">
        <section classNameName="section  about-section gray-bg" id="about" style={{paddingTop:"20px"}}>
            <div className="container" data-aos="fade-right">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About Me</h3>
                            <h6 className="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
                            <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Birthday</label>
                                        <p>4th april 1998</p>
                                    </div>
                                    <div className="media">
                                        <label>Age</label>
                                        <p>22 Yr</p>
                                    </div>
                                    <div className="media">
                                        <label>Residence</label>
                                        <p>Canada</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>California, USA</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>info@domain.com</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>820-885-3321</p>
                                    </div>
                                    <div className="media">
                                        <label>Skype</label>
                                        <p>skype.0404</p>
                                    </div>
                                    <div className="media">
                                        <label>Freelance</label>
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" />
                        </div>
                    </div>
                </div>
                 <div className="section-counter paralax-mf bg-image countBackround" >
                    <div className="overlay-mf"></div>
                 <div className="container position-relative">
                   <div className="row">
                     <div className="col-sm-3 col-lg-3">
                       <div className="counter-box counter-box pt-4 pt-md-0">
                         <div className="counter-ico">
                           <span className="ico-circle"><i><FontAwesomeIcon icon={faCheck}/></i></span>
                         </div>
                         <div className="counter-num">
                           <p data-purecounter-start="0" data-purecounter-end="450" data-purecounter-duration="1" className="counter purecounter">450</p>
                           <span className="counter-text">WORKS COMPLETED</span>
                         </div>
                       </div>
                     </div>
                     <div className="col-sm-3 col-lg-3">
                       <div className="counter-box pt-4 pt-md-0">
                         <div className="counter-ico">
                           <span className="ico-circle"><i ><FontAwesomeIcon icon={faBook}/></i></span>
                         </div>
                         <div className="counter-num">
                           <p data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="counter purecounter"></p>
                           <span className="counter-text">YEARS OF EXPERIENCE</span>
                         </div>
                       </div>
                     </div>
                     <div className="col-sm-3 col-lg-3">
                       <div className="counter-box pt-4 pt-md-0">
                         <div className="counter-ico">
                           <span className="ico-circle"><i ><FontAwesomeIcon icon={faUserAlt}/></i></span>
                         </div>
                         <div className="counter-num">
                           <p data-purecounter-start="0" data-purecounter-end="550" data-purecounter-duration="1" className="counter purecounter"></p>
                           <span className="counter-text">TOTAL CLIENTS</span>
                         </div>
                       </div>
                     </div>
                     <div className="col-sm-3 col-lg-3">
                       <div className="counter-box pt-4 pt-md-0">
                        <div className="counter-ico">
                           <span className="ico-circle"><i ><FontAwesomeIcon icon={faAward}/></i></span>
                         </div>
                         <div className="counter-num">
                           <p data-purecounter-start="0" data-purecounter-end="48" data-purecounter-duration="1" className="counter purecounter"></p>
                           <span className="counter-text">AWARD WON</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
        </section>
    </div>
    )
}

export default ProposPage
