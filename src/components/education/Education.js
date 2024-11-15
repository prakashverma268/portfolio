import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import '../education/education.css'; // Reuse the same CSS file with animations

const Education = () => {
  return (
    <section className="education-section" style={{ marginTop: "5px" }} id="education">
      <h2>Education</h2>
      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}  // Initial state for animation
        animate={{ opacity: 1, y: 0 }}    // Animation on appear
        transition={{ duration: 1, delay: 0.4 }}  // Slight delay for animation
      >
        <p>Master of Business Administration (MBA-IT)</p>
      </motion.div>
    </section>
  );
};

export default Education;
