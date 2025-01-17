import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiCss3, DiHtml5} from 'react-icons/di';
import { FaGitAlt, FaJava } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { SiSpringboot } from 'react-icons/si';
import { motion } from "framer-motion";

const iconVariants= (duration) => ({
    initial:{y: -10},
    animate:{
        y: [10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType: "reverse",
        }
    },

});


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        
      <motion.h2
      whileInView={{opacity:1, y:0}} 
      initial={{opacity:0, y:-100}}
      transition={{duration: 1.5}}
       className='my-20 text-center text-4xl'>Technologies
       </motion.h2>
     
      <motion.div
      whileInView={{opacity:1, x:0}} 
      initial={{opacity:0, x:-100}}
      transition={{duration: 1.5}}
       className='flex flex-wrap items-center justify-center gap-4'>
        
        <motion.div 
        variants={iconVariants(2.5)}
        initial= "initial"
        animate= "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <DiHtml5 className='text-7xl' style={{ color: '#E34F26' }} /> {/* HTML5: Red-Orange */}
        </motion.div>

        <motion.div
         variants={iconVariants(5)}
         initial= "initial"
         animate= "animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <DiCss3 className='text-7xl' style={{ color: '#1572B6' }} /> {/* CSS3: Blue */}
        </motion.div>

        <motion.div 
         variants={iconVariants(6)}
         initial= "initial"
         animate= "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiSpringboot className='text-7xl' style={{ color: '#6DB33F' }} /> {/* Spring Boot: Green */}
        </motion.div>

        <motion.div
         variants={iconVariants(10)}
         initial= "initial"
         animate= "animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl" style={{ color: '#F89820' }} /> {/* Java: Orange */}
        </motion.div>

        <motion.div
         variants={iconVariants(3)}
         initial= "initial"
         animate= "animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl' style={{ color: '#61DAFB' }} /> {/* React.js: Cyan */}
        </motion.div>

        <motion.div
         variants={iconVariants(4)}
         initial= "initial"
         animate= "animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className='text-7xl' style={{ color: '#336791' }} /> {/* PostgreSQL: Blue */}
        </motion.div>

        <motion.div
         variants={iconVariants(8)}
         initial= "initial"
         animate= "animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGitAlt className='text-7xl' style={{ color: '#F05033' }} /> {/* Git: Red-Orange */}
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
