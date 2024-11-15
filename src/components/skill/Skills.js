import React from 'react';
import { motion } from 'framer-motion';
import '../skill/skill.css';

const Skills = () => {
  return (
    <section className="skill-section" style={{ marginTop: "5px" }} id="skills">
      <h2>Skills</h2>
      <motion.ul 
        className="skill-list"
        initial={{ opacity: 0, y: 50 }}  // Initial state
        animate={{ opacity: 1, y: 0 }}    // Animation on appear
        transition={{ duration: 1, delay: 0.2}}  // Slight delay for animation
      >
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Java
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Spring MVC
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Spring Boot
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Spring Security
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
         Spring Data JPA
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          MySQL
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          PostgreSQL
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          RESTful APIs.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          GitHub
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Junit & Mockito
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          React
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Html & Css
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Agile & Jira
        </motion.li>
       
      </motion.ul>
    </section>
  );
};

export default Skills;
