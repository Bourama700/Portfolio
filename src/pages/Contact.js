import React from 'react';
import {Form,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faGlobe,faEnvelope}   from  '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
  <div>
    <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4  ContactBackround" >
      <div className="overlay-me"></div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf" >
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h3 className="title-left text-white">
                        Send Message Us
                      </h3>
                    </div>
                    <div>
                      <Form>
                          <Form.Group controlId="formBasicEmail ">
                              <Form.Label><h4 className="text-white"> Email address</h4></Form.Label>
                              <Form.Control type="email" placeholder="Enter email" />
                              <Form.Text className="text-muted" >
                              <span className="text-e text-white">We'll never share your email with anyone else.</span>
                               
                             </Form.Text>
                         </Form.Group>
                         <Form.Group controlId="formBasicText">
                              <Form.Label><h4 className="text-white mt-2"> FullName</h4></Form.Label>
                              <Form.Control type="text" placeholder="Enter fullName" />
                              <Form.Text className="text-muted " >
                              <span className="text-e text-white">We'll never share your email with anyone else.</span>
                               
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                             <Form.Label><h4 className="text-white mt-2">message</h4></Form.Label>
                             <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                     
                     <Button variant="primary" type="submit" className="mt-3">
                              Submit
                    </Button>
                </Form>
                    </div>
                  </div>
                  <div className="col-md-6 position-relative text-white text-i">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                        expedita aperiam aliquid at.
                        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                        mollitia inventore?
                      </p>
                      <ul className="list-ico">
                        <li><FontAwesomeIcon icon={faGlobe}/> 329 WASHINGTON ST BOSTON, MA 02108</li>
                        <li><FontAwesomeIcon icon={faPhone}/> (617) 557-0089</li>
                        <li><FontAwesomeIcon icon={faEnvelope}/> contact@example.com</li>
                      </ul>
                    </div>
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

export default Contact
