import React from "react";
import MyResponsiveNavbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./assets/Welcome.module.css";
import template from "./ResumeBuilder/assets/images/ashu.png";
import template2 from "./ResumeBuilder/assets/images/ashu2.png";
import template3 from "./ResumeBuilder/assets/images/IITN.png";
import template4 from "./ResumeBuilder/assets/images/IIT.png";
import { NavLink } from "react-router-dom";
import PrevImage from "./ResumeBuilder/assets/images/preview.png";
import Accordion from "react-bootstrap/Accordion";
import allTemp from "./ResumeBuilder/assets/images/allTemplate.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles 
import doubleQuote from './assets/double.png'
// ..
AOS.init();
function handleClick() {
  localStorage.removeItem("template");
}

const Welcome = () => {
  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
      console.log(credentialResponse.name);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <div>
      <MyResponsiveNavbar />
      <div className={`container-fluid  ${styles.background}`}>
        <div className="row  " style={{ display: "flex" }}>
          <div
            className="col-md-7 "
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <div className={`container  ${styles.leftbox}`}>
              <div className={`row ${styles.leftboxinner}`} data-aos="zoom-in">
                <div className={`col-md-10 `}>
                  <h6 className={styles.paragraph} style={{ color: "white" }}>
                    MyFuse Resume Builder{" "}
                    <img
                      src="https://images.hitpaw.net/landing-pages/aiicon.svg"
                      className="ms-2"
                    />
                    <span className={`${styles.AIProwered}`}>AI Powered</span>
                  </h6>
                  <h1 className={styles.heading} style={{ color: "white" , fontSize:'2.5rem'}}>
                    Elevate your career <br /> with our{" "}
                    <span style={{ color: "rgba(107,87,255)" }}>AI resume</span>{" "}
                    builder
                  </h1>
                  <p className={styles.paragraph} style={{ color: "white" }}>
                    Craft a polished resume swiftly using our AI-powered
                    platform and customizable templates. Impress potential
                    employers with a professionally designed document that
                    highlights your skills and experiences effectively. With our
                    user-friendly interface, creating a standout resume has
                    never been easier or quicker.
                  </p>
                </div>
                <div className="col-md-10">
                  <NavLink to="/welcome">
                    <button
                      className="btn   me-4 mb-3"
                      style={{
                        backgroundColor: "rgb(255, 179, 11)",
                        padding: ".6rem",
                        // color: "white",
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      Craft My Resume
                    </button>
                  </NavLink>

                  <NavLink to="/welcome" onClick={handleClick}>
                    <button
                      className="btn mb-3 "
                      style={{
                        backgroundColor: "rgb(255, 179, 11)",
                        border: "2px solid rgb(35, 45, 63) ",
                        padding: ".6rem",
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      View Samples
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-md-5   ${styles.templateBox}`}
            data-aos="fade-left"
          >
            <Carousel
              showThumbs={false}
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showStatus={false}
            >
              <div>
                <img
                  src={template}
                  className={`img-fluid ${styles.templateImage}`}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={template2}
                  className={`img-fluid ${styles.templateImage}`}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={template4}
                  className={`img-fluid ${styles.templateImage}`}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={template3}
                  className={`img-fluid ${styles.templateImage}`}
                  alt=""
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className={`container   ${styles.background3Back}`}>
        <div
          className="row  "
          style={{ display: "flex", justifyContent: "center" }}
          data-aos="fade-up"
        >
          <div
            className={`col-md-10 ${styles.background3} d-flex justify-content-center`}
          >
            <h1
              className={styles.heading}
              style={{ color: "white", textAlign: "center" }}
            >
              This Resume Builder is build for Myfuse.In
            </h1>
            <p
              className={styles.paragraph}
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Discover a world of opportunities with internships, projects, and
              a gateway to your professional future.
            </p>
            <NavLink to="https://myfuse.in/home">
              <button
                className="btn   me-4 mb-3"
                style={{
                  backgroundColor: "#ffb30b",
                  padding: ".6rem",
                  color: "#2a182e",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {" "}
                Go To MyFuse.In
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className={`container-fluid `}
        style={{
          background: "linear-gradient(180deg, #F7F5FF 0%, #FFF 100%)",
          paddingTop: "4rem",
        }}
        data-aos="fade-right"
      >
        <h1
          className={styles.heading}
          style={{ textAlign: "center", marginTop: "1.6rem" }}
        >
          New <span style={{ color: "rgba(107,87,255)" }}>AI </span> Features
          Unleash Your Creativity
        </h1>
        <div className="row ">
          <div
            className={`col-md-6  d-flex justify-content-center align-items-center`}
          >
            <img
              src="https://aicw.iamleehom.com/assets/assets.97b477b5.gif"
              className={`img-fluid `}
              alt=""
            />
          </div>
          <div className="col-md-5">
            <div className={`container  ${styles.leftbox}`}>
              <div className={`row ${styles.leftboxinner}`}>
                <div className={`col-md-10 `}>
                  <h6 className={styles.paragraph}>AI Resume Builder</h6>
                  <h1 className={styles.heading}>
                    <span style={{ color: "rgba(107,87,255)" }}>
                      {" "}
                      AI Writes{" "}
                    </span>{" "}
                    Your Resume. <br /> Let Technology Take the Lead
                  </h1>
                  <p className={styles.paragraph}>
                    {" "}
                    Revolutionize your job hunt with our curated resume and
                    cover letter templates. Featuring 40+ ATS-friendly designs
                    crafted by HR experts and typographers, each template is
                    fully customizable. Explore endless design combinations to
                    create standout applications that captivate employers,
                    fast-tracking your path to securing your ideal position.{" "}
                  </p>
                </div>
                <div className="col-md-10">
                  <NavLink to="/">
                    <button
                      className="btn   me-4"
                      style={{
                        backgroundColor: "#ffb30b",
                        fontWeight: "700",
                        padding: ".7rem",
                      }}
                    >
                      {" "}
                      Craft My Resume
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid    mb-4`} style={{ marginTop: "4rem" }}>
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-5">
            <div className={`container   `}>
              <div className={`row ${styles.leftboxinner}`}>
                <div className={`col-md-10 mt-4`} data-aos="fade-left">
                  <h6 className={styles.paragraph}>Resume Templates</h6>
                  <h1 className={styles.heading}>
                    Select a template and personalize your{" "}
                    <span style={{ color: "rgba(107,87,255)" }}>
                      {" "}
                      AI resume
                    </span>
                  </h1>
                  <p className={styles.paragraph}>
                    Accelerate your job search with visually striking resumes
                    and cover letters. Discover our collection of 40+
                    ATS-friendly templates, expertly crafted by HR professionals
                    and typographers. Customize every aspect to suit your style
                    and preferences, unleashing over a million unique design
                    combinations. Stand out and land your dream job faster.
                  </p>
                </div>
                <div className="col-md-10">
                  <NavLink to="/welcome">
                    <button
                      className="btn   me-4"
                      style={{
                        backgroundColor: "#ffb30b",
                        fontWeight: "700",
                        padding: ".6rem",
                      }}
                    >
                      {" "}
                      Craft My Resume
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-md-7  ${styles.middleTOP} `}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "4rem!important",
            }}
          >
            <img
              src={PrevImage}
              className={`img-fluid ${styles.previewImage} `}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={`container-fluid   `} style={{ marginTop: "5rem" }}>
        <div className="row ">
          <div
            className={`col-md-7  d-flex  justify-content-center align-items-center `}
          >
            <img
              src="https://static-cse.canva.com/blob/566484/modernresumes.jpg"
              // src={allTemp}

              className={`img-fluid   `}
              style={{width:'85%' , borderRadius:'16px'}}
              alt=""
            />
          </div>
          <div className="col-md-5">
            <div className={`container  ${styles.leftbox}`}>
              <div
                className={`row ${styles.leftboxinner}`}
                data-aos="fade-right"
              >
                <div className={`col-md-10 mt-4 `}>
                  <h6 className={styles.paragraph}>Resume Examples</h6>
                  <h1 className={styles.heading}>
                    Inspiration from{" "}
                    <span style={{ color: "rgba(107,87,255)" }}>
                      {" "}
                      Real Resume{" "}
                    </span>{" "}
                    Examples
                  </h1>
                  <p className={styles.paragraph}>
                    Explore our collection of real resume examples to gain
                    inspiration and insight into effective resume writing. Our
                    curated selection covers various industries, job positions,
                    and levels of experience, providing you with valuable ideas
                    and strategies to craft your own standout resume. Whether
                    you're just starting your career or seeking to advance to
                    the next level, these real-life examples can help you tailor
                    your resume to showcase your skills, accomplishments, and
                    qualifications effectively.
                  </p>
                </div>
                <div className="col-md-10">
                  <NavLink to="/">
                    <button
                      className="btn   me-4"
                      style={{
                        backgroundColor: "#ffb30b",

                        padding: ".7rem",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      Craft My Resume
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container   ${styles.backgroundBacktest}`}>
        <h1  className={` text-center ${styles.heading}`} style={{fontWeight:600 ,fontSize: '2rem' ,
    lineHeight: '2.6rem',  marginBottom:'3rem' , textTransform:'capitalize'}}>What Student Say About Us</h1>
        <div
          className="row "
          style={{ display: "flex", justifyContent: "center" ,  justifyContent:"space-around"    }}
        >
          <div
            className={`col-md-3 col-11  ${styles.testonomial} `}
            data-aos="flip-up"
            
          > 
         <img src={doubleQuote}  style={{width:'3rem'}} />
        <div className="mt-4"  style={{fontWeight:600}}>
            "Easy-to-use and effective. MyFuse Resume Builder streamlines resume creation, offering diverse templates and helpful features for professional-looking resumes in minutes."
        </div>
          
          <div  className="d-flex justify-content-around align-items-center " style={{marginTop:'3rem'}}>
            <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjjM4p0_TtAtEGX9RFnsPk5yBhnbSbEqpV5Y3Bs_uPNRGLrNp_ZgU1cjVh1M4YFFSU7s&usqp=CAU" style={{width:'5rem' , height:'5rem' , borderRadius:'4rem'}} />
            <span  style={{fontWeight:600}} >Ishika Choudhary</span>
          </div>

          </div>

          <div
            className={`col-md-3  col-11 ${styles.testonomial} `}
            data-aos="flip-up"
            
          > 
         <img src={doubleQuote}  style={{width:'3rem'}} />

             <div className="mt-4"  style={{fontWeight:600}} >
         "seamless experience, standout resumes. MyFuse Resume Builder offers a streamlined process with customizable options, ideal for creating professional resumes with ease. "
             </div>
             <div  className="d-flex justify-content-around align-items-center " style={{marginTop:'3rem'}}>
            <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVxRscwjvmDGbLvkvNfPGmp1a-RuGXoLkaT1cJVz2xrTfeZpM2bD_KmVzjZ_uXrqaLSI&usqp=CAU" style={{width:'5rem' , height:'5rem' , borderRadius:'4rem'}} />
            <span  style={{fontWeight:600}} >Aadhya Rajput</span>
          </div>
          </div>

          <div
            className={`col-md-3  col-11  ${styles.testonomial} `}
            data-aos="flip-up"
            
          > 
         <img src={doubleQuote}  style={{width:'3rem'}} />
          <div className="mt-4"  style={{fontWeight:600}}>

            "Effortless and polished results. MyFuse Resume Builder offers a user-friendly interface with diverse templates, perfect for crafting professional resumes quickly"
          </div>
          <div  className="d-flex justify-content-around align-items-center " style={{marginTop:'3rem'}}>
            <img   src="https://userphotos2.teacheron.com/1641770-35898.jpg" style={{width:'5rem' , height:'5rem' , borderRadius:'4rem'}} />
            <span  style={{fontWeight:600}} >Himanshu Mishra</span>
          </div>
          </div>
        </div>
      </div>

      <div className={`container   ${styles.background3Back}`}>
        <div
          className="row  "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className={`col-md-10 ${styles.background4} `}
            data-aos="flip-up"
          >
            <h1 className={styles.heading} style={{ textAlign: "center" }}>
              Your Gateway to Infinite Opportunities
            </h1>
            <p
              className={styles.paragraph}
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Myfuse's comprehensive platform is designed to help you discover
              the right job for you..
            </p>
            <NavLink to="https://myfuse.in/home">
              <button
                className="btn   me-4 mb-3"
                style={{
                  backgroundColor: "#ffb30b",

                  padding: ".6rem",

                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                {" "}
                Go To Myfuse.In
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className={`container-fluid    mb-4`} style={{ marginTop: "4rem" }}>
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-7">
            <div className={`container   `}>
              <div className={`row ${styles.leftboxinner}`}>
                <div className={`col-md-10 mt-4`}>
                  <h1 className={styles.heading}>
                    Are you ready to be part of a{" "}
                    <span style={{ color: "rgba(107,87,255)" }}>
                      {" "}
                      MyFuse.In{" "}
                    </span>
                    ?
                  </h1>
                  <p className={styles.paragraph}>
                    Your ultimate placement portal. Connect with opportunities,
                    share experiences, and thrive in your career journey.
                    Empowering professionals to find their perfect fit. Join now
                    and elevate your career
                  </p>
                </div>
                <div className="col-md-10">
                  <NavLink to="/welcome">
                    <button
                      className="btn   me-4"
                      style={{
                        backgroundColor: "#ffb30b",
                        padding: ".6rem",
                        color: "rgb(35, 45, 63)",
                        fontWeight: 600,
                      }}
                    >
                      {" "}
                      Explore MyFuse
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-md-5  ${styles.middleTOP} `}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "4rem!important",
            }}
          >
            <img
              src="https://assets.softr-files.com/applications/8f7af9fb-a550-425d-b327-48195c193a5f/assets/cd5e62b0-d912-431b-91c0-6f8ba206accb.png"
              className={`img-fluid ${styles.previewImage} `}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={`container-fluid   mb-4  mt-4 `}>
        <div className="row d-flex justify-content-center ">
          <div className="col-md-8 col-12 mt-4">
            <h1 style={{ textAlign: "center" }}>
              Your frequently asked questions.
            </h1>
            <Accordion defaultActiveKey="0" className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  Why is MyFuse the best resume builder online?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Because it offers a comprehensive set of features and
                    benefits designed to make the job search journey easier and
                    more effective. Here's how:
                  </p>

                  <h6>Professionally-Designed Templates</h6>
                  <p>
                    MyFuse’s online resume builder offers a wide range of
                    professionally-designed resume templates and cover letter
                    templates with features and elements that let you customize
                    them however you like.
                  </p>

                  <h6>Autopilot Feature</h6>
                  <p>
                    MyFuse Autopilot allows you to assemble your resume from
                    more than 20,000 pre-written phrases for more than 3,200
                    positions. This helps you find the right words right from
                    the start and write your resume quickly.
                  </p>

                  <h6>AI Resume Writer</h6>
                  <p>
                    The AI resume writer generates a relevant work experience
                    section for a specific job title, making the resume writing
                    process more efficient and effective.
                  </p>

                  <h6>AI Cover Letter Writer</h6>
                  <p>
                    The AI cover letter writer can generate role-specific cover
                    letters that look and feel like cover letters written by
                    real people, enhancing your chances of making a positive
                    impression on potential employers.
                  </p>

                  <h6>AI Resume Checker</h6>
                  <p>
                    The AI resume checker analyzes your resume to find out what
                    needs to be improved, ensuring that your resume is optimized
                    for applicant tracking systems (ATS) and human recruiters
                    alike.
                  </p>

                  <h6>LinkedIn Data Import</h6>
                  <p>
                    The LinkedIn data import option makes it easy to create a
                    resume in a few clicks, saving you the hassle of starting
                    from scratch and ensuring accuracy and consistency across
                    platforms.
                  </p>

                  <h6>Resume and Cover Letter Samples</h6>
                  <p>
                    MyFuse provides resume and cover letter samples that you can
                    use to create your first draft or get inspired. The database
                    holds over 1,500 job-specific resumes belonging to real
                    people.
                  </p>

                  <p>
                    If you’re not convinced yet, we encourage you to explore
                    other resume builders and compare their features and
                    benefits. See how MyFuse stands out in terms of
                    functionality, design, and user satisfaction.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Guide to Creating Your Resume with MyFuse
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    If you don’t know where to begin, don’t worry. MyFuse will
                    guide you through every stage of writing your resume, one
                    section at a time.
                  </p>

                  <h6>Getting Started</h6>
                  <ol>
                    <li>Sign up or log in to your MyFuse account.</li>
                    <li>
                      When logged in, on the dashboard scroll down to Your
                      Documents and click on Create New.
                    </li>
                  </ol>

                  <h6>Choose Your Approach</h6>
                  <p>Next, you can choose among:</p>
                  <ul>
                    <li>
                      Creating a brand new resume using the template and
                      customization options of your choice.
                    </li>
                    <li>
                      Importing your existing data from LinkedIn and choosing
                      your preferred design.
                    </li>
                    <li>
                      Using one of 1,500+ existing resume samples and tweaking
                      the details to match yours.
                    </li>
                  </ul>

                  <h6>Adding Content</h6>
                  <p>
                    Finally, you add resume sections and populate each one with
                    relevant content. You can also assemble the first draft of
                    your resume just by clicking or using AI:
                  </p>
                  <ol>
                    <li>
                      We’ve got more than 20,000 pre-written phrases for more
                      than 3,200 jobs. Simply start editing your resume, click
                      “Add Phrases”, look up your job title, and watch your
                      resume write itself.
                    </li>
                    <li>
                      AI resume writer will generate a relevant work experience
                      section for a specific job title. You can then edit it and
                      tweak the details to make it more you.
                    </li>
                  </ol>

                  <p>
                    If you're not sure about how to write the individual
                    sections of your resume, you can visit our Help Center, read
                    the ultimate resume guide, or click the chameleon icon
                    inside the app.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How to Make Your Resume Stand Out with MyFuse?
                </Accordion.Header>
                <Accordion.Body>
                  <h6>Design:</h6>
                  <ol>
                    <li>
                      Choose a visually appealing yet professional template that
                      fits your industry and profession.
                    </li>
                    <li>
                      Ensure that the design is ATS-friendly to increase the
                      chances of passing through applicant tracking systems.
                    </li>
                  </ol>

                  <h6>Content:</h6>
                  <ol>
                    <li>
                      Use MyFuse's features to assemble the first draft of your
                      resume effortlessly:
                    </li>
                    <ul>
                      <li>
                        Access over 20,000 pre-written phrases tailored for more
                        than 3,200 job titles. Simply click "Add Phrases", look
                        up your job title, and select relevant phrases to
                        include in your resume.
                      </li>
                      <li>
                        Select from a library of 1,500+ job-specific resume
                        samples and customize the information to reflect your
                        unique skills and experiences.
                      </li>
                      <li>
                        Utilize MyFuse's AI resume writer, which generates a
                        relevant work experience section based on a specific job
                        title, streamlining the resume writing process.
                      </li>
                    </ul>
                  </ol>

                  <p>
                    By leveraging MyFuse's design options and content creation
                    features, you can create a standout resume that effectively
                    showcases your strengths and maximizes your chances of
                    securing interviews.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How does the AI Resume Writer work?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    MyFuse’s AI Resume Writer is able to generate a work
                    experience section based on a provided job title.
                  </p>

                  <p>All you have to do is:</p>

                  <ol>
                    <li>
                      Sign up or log in to your MyFuse account. When logged in,
                      on the dashboard scroll down to Your Documents and click
                      on Create New.
                    </li>
                    <li>
                      When filling in the Work Experience section, enter your
                      job title, click “Use AI Writer” and the AI will generate
                      a number of bullet points for your work experience
                      subsection.
                    </li>
                    <li>
                      If you don't like these bullet points, you can either edit
                      them or delete them and click the button again.
                    </li>
                    <li>
                      If you like the bullet points but feel like that section
                      is still too short, simply click the button again and the
                      AI will add more phrases to it.
                    </li>
                  </ol>

                  <p>
                    Our AI Resume Builder is easy to use, generates unique
                    resumes every time, and uses natural language
                    indistinguishable from resumes written by human writers.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  What is the best AI Resume Builder?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Definitely MyFuse's AI Resume Builder. Here are the reasons
                    why:
                  </p>

                  <ul>
                    <li>
                      MyFuse AI Resume Builder is based on OpenAI’s GPT-3 neural
                      network, which is the world's most powerful natural
                      language processing model.
                    </li>
                    <li>
                      The texts produced by this language model are
                      indistinguishable from texts written by human writers.
                    </li>
                    <li>
                      Each resume that is produced by our AI Resume Builder is
                      unique and custom-built for you.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <div className={`container-fluid   ${styles.background4Back}`}>
        <div
          className="row  "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className={`col-md-12 ${styles.background5} `}>
            <h1
              className={styles.heading}
              style={{ color: "rgb(35, 45, 63)", textAlign: "center" }}
            >
              Start building today. It's Free!
            </h1>
            <p
              className={styles.paragraph}
              style={{
                color: "rgb(35, 45, 63)",
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
                marginBottom: "2rem",
              }}
            >
              Build and Download your first Resume in under 30 minutes.
            </p>
            <NavLink to="/welcome">
              <button
                className="btn   me-4 mb-3"
                style={{
                  backgroundColor: "#ffb30b",

                  padding: ".6rem",

                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {" "}
                Craft My Resume
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Welcome;
