
import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'
import img from '../Style/Images/m.jpeg'

const clgInfo=()=> {
 
  return (
    <>
    <div>
        <HomeHelper />
        
    
    
    </div>
    <div>
    <div class="banner text-center" data-scroll-index='0'>
        <div class="banner-overlay">
            <div class="container">
                <h1 class="text-capitalize">Welcome to our campus</h1>
                <p>JSS STU University is built on a strong reputation of SJCE, Mysuru, and passionately committed for providing education in Science, Technology, Engineering & Mathematics (STEM) and Management. It is Steadfast to find solutions to some of
                    the great challenges of our time through scientific research and technological innovations. The institution also has the reputation of academic excellence in professionally oriented programs, and equal proficiency in extra-curricular
                    activities, which makes it a lucrative option for students from all over the country, especially those staying in remote places eyeing at Science and Engineering career.</p>
                <a href="https://beta.jssstuniv.in/about-us/"  class="banner-btn">Read More</a> </div>
        </div>
    </div>

   

    <div class="about-us section-padding" data-scroll-index='1'>
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-50">
                    <div class="section-info">
                        <div class="sub-title-paragraph">
                            <h4>Our Department</h4>
                            <h5>Department has been established to design and offer courses MCA and BCA with an objective of producing the best computer professionals to keep swiftness with the RD activities in this fast emerging field of Computer Applications.</h5>
                            <br></br>
                            <h4>Message From HOD</h4>
                            <p>The Department of Computer Applications provides a vibrant learning environment for the overall development of the student. We have well qualified and steadfast faculty to provide qualitative, Industry tuned education to students.
                                Our course is structured in such a way that it provides academic excellence with strong work ethic by creating experiences that extend classroom learning into the real world. Our department promotes and practice entrepreneurial
                                culture and Professional ethics in the student communities which helps evolve as leaders with social concerns.</p>
                        </div>
                        <a href="https://jssstuniv.in/departments-ca/" class="anchor-btn">Learn more <i class="fas fa-arrow-right pd-lt-10"></i></a> </div>
                </div>
                <div class="col-md-6 mb-50">
                    <div class="section-img"> <img src={img} class="img-responsive" />
                        <ul>
                            <li>email ID: aradhya@jssstuniv.in</li>
                            <li>Phone Number of HOD : +91 9886896108</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="testimonials">
        <div class="testimonials-overlay section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <div class="owl-carousel owl-theme">
                            <div style={{color:"white"}} class="testimonial-item text-center">
                                <strong>   102 </strong> Area in acres
                            </div>
                            <div style={{color:"white"}} class="testimonial-item text-center">
                                <strong>   275+</strong> Faculties
                            </div>
                            <div style={{color:"white"}} class="testimonial-item text-center">
                                <strong>   5500+</strong> students
                            </div>
                            <div style={{color:"white"}} class="testimonial-item text-center">
                                <strong>   25000+</strong> Alumni Strength
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact section-padding" data-scroll-index='4'>
        <div class="container">
            <div class="row">
                <div class="col-md-12 section-title text-center">
                    <h3>Contact Us For More</h3>
                    <span class="section-title-line"></span> </div>
                <div class="col-lg-5 col-md-4">
                    <div class="part-info">
                        <div class="info-box">

                            <div class="content">
                                <h4>Phone :</h4>
                                <p>0821-2548285</p>
                            </div>
                        </div>
                        <div class="info-box">

                            <div class="content">
                                <h4>Address :</h4>
                                <p>JSS IT Campus, Manasagangothri, Mysuru, Karnataka 570006</p>
                            </div>
                        </div>
                        <div class="info-box">

                            <div class="content">
                                <h4>Mail :</h4>
                                <p>
                                    <a mailto="office@jssstuniv.in">office@jssstuniv.in</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-8">
                    <div class="contact-form">
                        <form class='form' id='contact-form' method='post' data-toggle='validator'>
                            <input type='hidden' name='form-name' value='contact-form' />
                            <div class="messages"></div>
                            <div class="controls">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input id="form_name" type="text" name="name" placeholder="Name *" required data-error="name is required."></input>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input id="form_email" type="email" name="email" placeholder="Email *" required data-error="Valid email is required."></input>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input id="form_subject" type="text" name="subject" placeholder="Subject"></input>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 form-group">
                                        <textarea id="form_message" name="message" class="form-control" placeholder=" Type Your Message " rows="4" required data-error="Please,leave us a message."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="col-lg-12 text-center">
                                        <button type="submit" class="bttn">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

 



        




















        
      
        
        {/* <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/"></base>
<div id="slider">
      <figure>
      <img src="" alt></img>
      <img src="https://images.shiksha.com/mediadata/images/1603270293php6EfYUw.jpeg" alt></img>
      <img src="https://sjce.ac.in/wp-content/uploads/2018/01/13717316_986628254788562_3319145106671402444_o-1000x600.jpg" alt></img>
      <img src="https://sjce.ac.in/wp-content/uploads/2018/01/DSC_9752-1000x600.jpg" alt></img>
      <img src="https://images.shiksha.com/mediadata/images/1559273318phpkS54ZX.jpeg" alt></img>
      </figure>
      </div> */}
</div>
</>
 )
}

export default clgInfo;
