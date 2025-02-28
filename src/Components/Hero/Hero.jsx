import React from "react";
import "./Hero.css";
import profile_img from "../../assets/afrin-pic.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import my_resume from "../../assets/afrin_resume.pdf";

const Hero = () => {
  // Function to handle both downloading and redirecting
  const handleDownloadAndRedirect = () => {
    // Open the Google Drive link in a new tab
    window.open(
      "https://drive.google.com/file/d/1la9V-PDWutk7I5pV8pZF2AkmiHkWJ-Vk/view?usp=drive_link",
      "_blank"
    );

    // Trigger the download of the local resume
    const link = document.createElement("a");
    link.href = my_resume;
    link.download = "afrin_resume.pdf"; // Optional: name the downloaded file
    link.click();
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        {" "}
        <span>I'm Afrin Shaikh,</span> Frontend Developer based in India
      </h1>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <button className="hero-resume" onClick={handleDownloadAndRedirect}>
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
