import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import { Fade } from 'react-awesome-reveal'; // Using Fade for cascading effect
import { useInView } from 'react-intersection-observer'; // For visibility trigger
import '../project/project.css'; // CSS styles

const projectsData = [
  {
    name: 'TASKFLOW (Heat Generation Process)',
    description: 'Amount of heat management...',
  },
  {
    name: 'ARSA (Medical Hospital System)',
    description: 'Designed and developed a sophisticated platform...',
  },
  {
    name: 'CARLIO (Consultancy Service)',
    description: 'Doctors and Patient online Consultant',
  },
  {
    name: 'SEGUE (Hospital Management System)',
    description: 'Created Order and Patient',
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 1000,
  });

  return (
    <section className="project-section" id="projects" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        Projects
      </motion.h2>

      {/* Render the project items with delayed animation */}
      {inView && (
        <motion.div
          className="project-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Fade cascade damping={0.3} triggerOnce>
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className="project-item"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </motion.div>
            ))}
          </Fade>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
