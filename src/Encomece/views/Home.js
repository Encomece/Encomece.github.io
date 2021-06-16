import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-router-dom"
//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselMain from "../components/CarouselMain";

//css
import classes from "../assets/css/index_layout.module.css";
import "../assets/css/index_layout.module.css";

//Images
import Image2 from "../assets/Images/Index_img/flat-illustration-blog-content-blogging-commercial-blog-posting-internet-blogging-service_126608-84-removebg-preview.webp";
import Image1 from "../assets/Images/Index_img/digital-marketing-illustration_1893-2527-removebg-preview.webp";

//icons
import SupervisorAccountTwoToneIcon from "@material-ui/icons/SupervisorAccountTwoTone";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import {Link as ScrollLink } from "react-scroll";
const Home = () => {
  return (
    <>
      <div className={classes.bgImg}>
        <div className={classes.cnt}>
          <Navbar />
        </div>
        <div className={classes.text}>
          <div className={classes.tsec1}>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              ratione fuga sequi. Ipsam, voluptate atque.
            </h1>
          </div>
          <div className={classes.tsec2}>
            <ScrollLink
              to="services"
              active="nav__activelink"
              spy={true}
              smooth={true}
              duration={1000}
              style={{ cursor: "pointer", color: "white" }}
            >
              <button>Explore Now</button>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "60px" }} id="aboutus">
        {" "}
        <div className={classes.aboutus}>
          <div className={classes.mainsec}>
            <div className={classes.col1}>
              <div className={classes.collayout}>
                <div className={classes.logo}>
                  <SupervisorAccountTwoToneIcon
                    style={{ fontSize: "100px", color: "orange" }}
                  />
                  <h4>Dedicated Teams</h4>
                  <br />
                  <p>
                    We at Encomece ensure the quality of work and
                    confidentiality of information.
                  </p>
                </div>
              </div>
              <div className={classes.collayout}>
                <div className={classes.logo}>
                  <QuestionAnswerIcon
                    style={{ fontSize: "100px", color: "blue" }}
                  />
                  <h4>Best Consulation</h4>
                  <br />
                  <p>
                    We provide the best consultation and suggest you the best
                    possible thing to start with.
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.col2} style={{ padding: "0 1.5% 0 1.5%" }}>
              <br />
              <br />
              <h1>About Us</h1>
              <br />
              <h3>Best resources for the best idea</h3>
              <p>
                We welcome young and bright minds brimming with innovative ideas
                and help them make it real. Our goal is to walk alongside
                startups and provide them with guidance at every step to
                success. We believe every idea is the best idea and, best ideas
                need the best resources. If you are a new startup or having an
                idea that holds potential, we are here to help you.
              </p>
            </div>
            <div className={classes.col1}>
              <div className={classes.collayout}>
                <div className={classes.logo}>
                  <HowToRegIcon style={{ fontSize: "100px", color: "red" }} />
                  <h4>Trained Experts</h4>
                  <br />
                  <p>
                    Our trained professionals will support you in every task to
                    accelerate your startup growth.
                  </p>
                </div>
              </div>
              <div className={classes.collayout}>
                <div className={classes.logo}>
                  <VerifiedUserIcon
                    style={{ fontSize: "100px", color: "green" }}
                  />
                  <h4>Assurance</h4>
                  <br />
                  <p>
                    We guarantee the utmost confidentiality and quality of your
                    work with the best results possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="programs" style={{ paddingTop: "70px" }}>
        {" "}
        <div className={classes.Programs}>
          <h1>Featured Programs</h1>
          <div>
            <div className={classes.vep}>
              <div className={classes.image}>
                <img src={Image1} width="75%" alt="" />
              </div>
              <div className={classes.content}>
                <center>
                  <h1 style={{ marginTop: "19px", fontFamily: "fangsong" }}>
                    VIRTUAL EMPLOYEE PROGRAM
                  </h1>
                </center>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  illum, quisquam, tempora earum saepe cum aperiam amet,
                  pariatur nisi non repudiandae molestiae eligendi porro
                  obcaecati.
                </p>
                <center>
                  <NavLink to="/ve_program" className={classes.link}>
                    <button className={classes.button}>
                      Learn More &nbsp;
                    </button>
                  </NavLink>
                </center>
              </div>
            </div>
            <div className={classes.sp}>
              <div className={classes.image}>
                <img src={Image2} width="87%" alt="" />
              </div>
              <div className={classes.content}>
                <center>
                  <h1 style={{ marginTop: "19px", fontFamily: "fangsong" }}>
                    STARTUP PROGRAM
                  </h1>
                </center>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  illum, quisquam, tempora earum saepe cum aperiam amet,
                  pariatur nisi non repudiandae molestiae eligendi porro
                  obcaecati.
                </p>
                <center>
                  <NavLink to="/startup_program" className={classes.link}>
                    <button className={classes.button}>
                      Learn More &nbsp;
                    </button>
                  </NavLink>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.sec4}>
        <div className={classes.sec41}>
          <h1>Didn't get what you are looking for?</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            incidunt amet libero ratione, qui debitis ea officiis alias ex fuga
            esse vitae dicta dolore consectetur nam illum autem unde.
            Cupiditate?
          </p>

          <Link to="/auth">
            <button className={classes.join_now}>Join Us Now</button>
          </Link>
          <div id="services"></div>
        </div>
        <div className={classes.sec42}></div>
      </div>
      <div className={classes.toolsandR}>
        <h1>Tools And Resources</h1>

        <div>
          <Carousel fade indicators={false}>
            <Carousel.Item interval={10000}>
              <div className={classes.t_rcards}>
                <div className={classes.dev}>
                  <div className={classes.dimg}>
                    <h3>Development</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                </div>
                <div className={classes.des}>
                  <div className={classes.deimg}>
                    <h3>Designing</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                </div>
                <div className={classes.man}>
                  <div className={classes.mimg}>
                    <h3>Management</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                  <br />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <div className={classes.t_rcards}>
                <div className={classes.dev}>
                  <div className={classes.dimg}>
                    <h3>Marketing</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                </div>
                <div className={classes.des}>
                  <div className={classes.deimg}>
                    <h3>Content Writing</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                </div>
                <div className={classes.man}>
                  <div className={classes.mimg}>
                    <h3>Advertising</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                  <br />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Caraousal Part */}
      <CarouselMain />
      <div className={classes.blog}>
        <div className={classes.b_heading}>
          <h1>Blog</h1>
        </div>
        <div className={classes.blog_s1}>
          <div className={classes.Mg26}></div>
          <div className={classes.b_content}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <span className={classes.time}>
              <label>Jan 26, 2021</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>5 mins</label>
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis fuga debitis sapiente odit suscipit? Doloremque laborum
              similique......
              <a className={classes.link} href="">
                Read More
              </a>
            </p>
          </div>
        </div>
        <div className={classes.blog_s2}>
          <div className={classes.Mg27}></div>
          <div className={classes.b_content}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <span className={classes.time}>
              <label>Jan 26, 2021</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>5 mins</label>
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis fuga debitis sapiente odit suscipit? Doloremque laborum
              similique......
              <a className={classes.link} href="">
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.news_letter}>
        <div className={classes.main_sec_blog}>
          <div className={classes.heading_sec}>
            <h1 style={{ fontWeight: "500" }}>Subscribe to Our Newsletter</h1>
          </div>
          <div className={classes.input_sec}>
            <input type="email" placeholder="Enter Your Email" name="" id="" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
