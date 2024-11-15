import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../components/images/prak.jpg";

const Profile = () => {
  return (
    <motion.section
      className="profile"
      id="profile"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="profile-container">
        <motion.div
          className="profile-pic-container"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={profilePic}
            alt="Profile picture of Prakash Verma"
            className="profile-pic"
          />
        </motion.div>

        <div className="profile-description" style={{marginLeft: "10%",marginRight : "10%"}}>
       
          <p  style={{ fontStyle: "italic", fontSize: "20px" ,marginBottom: "15px",textAlign: "center" }}>
          I am a Java Developer with 2.5+ years of experience specializing in building scalable 
          applications and microservices. My expertise extends to frontend development with React,
           delivering seamless user experiences. I am skilled in using GitHub for version control and collaboration.
            Passionate about continuous learning, I strive to create efficient, high-performance solutions......
          </p>
          <div style={{fontSize:"25px",marginLeft: "15px"}}>
            <a  style={{color :"white" ,marginRight:"20px" }} href="https://github.com/yourusername">GitHub</a>
            <a  style={{color :"white" ,marginRight:"20px"}}  href="https://www.linkedin.com/in/prakash-verma-924265206/">LinkedIn</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
