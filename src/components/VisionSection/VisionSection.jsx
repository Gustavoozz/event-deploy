import React from 'react';
import './VisionSection.css';
import Title from '../Title/Title';
import { motion } from 'framer-motion';

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className="vision__box">
                <Title 
                    titleText={"Vision"}
                    color='white'
                    additionalClass ='vision__title'
                />
                <motion.p 
                 initial={{ opacity: 0, x: 100 }}
                 whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1.0 }}
                className='vision__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus autem assumenda, suscipit distinctio debitis nihil voluptates sunt sit, nesciunt dolorum dolorem magnam vitae illum commodi, magni quod eveniet ab dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus autem assumenda, suscipit distinctio debitis nihil voluptates sunt sit, nesciunt dolorum dolorem magnam vitae illum commodi, magni quod eveniet ab dolor.</motion.p>
            </div>
        </section>
    );
};

export default VisionSection;