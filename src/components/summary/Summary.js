
import React from 'react';
import { motion } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer'; 
import '../summary/summary.css';

const Summary = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    delay: 1000,
  });

  return (
    <section className="summary" id="summary" ref={ref}>
      <Slide direction={inView ? "left" : "right"} duration={1000} triggerOnce>
        <h2>Summary</h2>
      </Slide>

      {/* Render the summary items with delayed animation */}
      {inView && (
        <motion.ul
          style={{ listStyle: 'none' }}
          initial={{ opacity: 0, x: inView ? -100 : 100 }}  
          animate={{ opacity: 1, x: 0 }}    
          transition={{ duration: 1.5, ease: 'easeOut' }}  
        >
          <Fade cascade damping={0.3} triggerOnce>
            <motion.li
              initial={{ opacity: 0, x: -100 }}  
              animate={{ opacity: 1, x: 0 }}    
              transition={{ duration: 1, delay: 0.6 }}
            >
              2.5+ years of experience in (Java + React)...
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}  
              animate={{ opacity: 1, x: 0 }}     
              transition={{ duration: 1, delay: 0.8 }}
            >
              Extensive experience in front-end development...
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: 1, x: 0 }}     
              transition={{ duration: 1, delay: 1 }}
            >
              Skilled in building scalable web applications...
            </motion.li>
          </Fade>
        </motion.ul>
      )}
    </section>
  );
};

export default Summary;






