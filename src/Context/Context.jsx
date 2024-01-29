import React from 'react'
import './Context.css'
import whatsapp from '../Components/Assets/whatsapp-line.png'
import github from '../Components/Assets/github.png'
import linkedin from '../Components/Assets/linkedin.png'
import instagram from '../Components/Assets/instagram-line.png'
import mine from '../Components/Assets/mine.jpg'
import service from '../Components/Assets/service.png'
import arrow from '../Components/Assets/arrow-right-s-line.png'
import coding from '../Components/Assets/coding.png'
import project2 from '../Components/Assets/project 2.jpg'
import project3 from '../Components/Assets/project 3.jpg'
import project4 from '../Components/Assets/project 4.jpg'
import project5 from '../Components/Assets/project 5.jpg'
function Context() {

    const header = document.querySelector("header");
    
    window.addEventListener("scroll", function(){
        header.classList.toggle("sticky", window.scrollY > 120);
    });
    
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');
    
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('active');
    };
    
    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    }

  return (
    <div>
        <section className="hero" id="home">
        <div className="main-content">
            <h4>Hi, There!</h4>
            <h1>I'm<span>Karthickprakash</span></h1>
             <p>Full stack java developer</p>

             <div className="social">
                <a href="#whatsapp"><img src={whatsapp} alt='no img'/></a>
                <a href="#github"><img src={github} alt='no img'/></a>
                <a href="#linkedin"><img src={linkedin} alt='no img'/></a>
                <a href="#instagram"><img src={instagram} alt='no img'/></a>
             </div>

             <div className="main-btn">
                <a href="#hire" className="btn">Hire me</a>
                <a href="#download" className="btn btn2">Download CV</a>
             </div>
    </div>
       </section>

       <section className="about" id="about">
        <div className="about-img">
            <img src={mine} alt='no img'/>
        </div>

        <div className="about-text">
            <h2>I am Web<span>Developer</span><br/>&Application Developer
            </h2>

            <div className="exp-area">
                <p className="exp">
                    Experience:
                    <span>Fresher</span>
                </p>

                <p className="exp">
                    Speciality:
                    <span>Web Developer, Application Developer</span>
                </p>

                <p className="exp">
                    Address:
                    <span>Palani, Dindigul, Tamil Nadu</span>
                </p>

                <p className="exp">
                    Email:
                    <span>karthickofficial@yahoo.com</span>
                </p>

                <p className="exp">
                    Phone:
                    <span>+916379170347</span>
                </p>
            </div>
            <a href="#view" className="btn">View All Projects</a>
        </div>
       </section>

       <section className="Services" id="services">
        <div className="center-text">
            <h2>My <span>Services</span></h2>
        </div>
        <div className="services-content">
            <div className="box">
                <img src={service} alt='no img'/>
                <h3>UI/UX Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    A nesciunt delectus numquam alias, laboriosam fugit enim odit eligendi rem aperiam.</p>
                    <a href="#download"  className="arrow">
                        Download Now
                        <img src={arrow} alt='no img'/>
                    </a>
            </div>

            <div className="box">
                <img src={service} alt='no img'/>
                <h3>UI/UX Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    A nesciunt delectus numquam alias, laboriosam fugit enim odit eligendi rem aperiam.</p>
                    <a href="#download"  class="arrow">
                        Download Now
                        <img src={arrow} alt='no img'/>
                    </a>
            </div>

            <div className="box">
                <img src={service} alt='no img'/>
                <h3>UI/UX Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    A nesciunt delectus numquam alias, laboriosam fugit enim odit eligendi rem aperiam.</p>
                    <a href="#download" className="arrow">
                        Download Now
                        <img src={arrow} alt='no img'/>
                    </a>
            </div>

        </div>
       </section>

       <section className="portfolio" id="portfolio">
        <div className="center-text">
            <h2>My <span>Portfolio</span></h2>
        </div>

        <div className="portfolio-content">
            <div className="row">
                <img src={coding} alt='no img'/>
                <div className="main-row">
                    <div className="row-text">
                        <h5>Website Design</h5>
                    </div>
                    <div className="row-icon">
                        <img src={github} alt='no img'/>
                    </div>
                </div>
                <h4>Website Devlopment For Dark X</h4>
            </div>

             <div className="row">
                <img src={project2} alt='no img'/>
                <div className="main-row">
                    <div className="row-text">
                        <h5>Website Design</h5>
                    </div>
                    <div className="row-icon">
                        <img src={github} alt='no img'/>
                    </div>
                </div>
                <h4>Website Devlopment For Dark X</h4>
            </div>

             <div className="row">
                <img src={project3} alt='no img'/>
                <div className="main-row">
                    <div className="row-text">
                        <h5>Website Design</h5>
                    </div>
                    <div className="row-icon">
                        <img src={github} alt='no img'/>
                    </div>
                </div>
                <h4>Website Devlopment For Dark X</h4>
            </div>

             <div className="row">
                <img src={project4} alt='no img'/>
                <div className="main-row">
                    <div className="row-text">
                        <h5>Website Design</h5>
                    </div>
                    <div className="row-icon">
                        <img src={github} alt='no img'/>
                    </div>
                </div>
                <h4>Website Devlopment For Dark X</h4>
            </div>

             <div className="row">
                <img src={project5} alt='no img'/>
                <div className="main-row">
                    <div className="row-text">
                        <h5>Website Design</h5>
                    </div>
                    <div className="row-icon">
                        <img src={github} alt='no img'/>
                    </div>
                </div>
                <h4>Website Devlopment For Dark X</h4>
            </div>

             
        </div>
       </section>

       
       <section className="contact" id="contact">
        <div className="center-text">
            <h2>Contact<span>Me</span></h2>
        </div>
        <div className="contact-form">
            <form action="">
                <input type="text" placeholder="Your name" required/>
                <input type="email" placeholder="Email Address..." required/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Write Message here..." required/>
                <input type="submit" name="" value="Send Message" className="send-btn"/>
            </form>
        </div>
       </section>

       <div className="footer">
        <div className="copyright">
            <p>2023 Karthickprakash, All Rights Reserved</p>
        </div>

        <a href="#home" class="scroll-top">
            <img src={arrow} alt='no img'/>
        </a>
       </div>

        </div>
  )
}

export default Context