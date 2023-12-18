import React from "react";
import "./ContactSection.css";
import Title from "../Title/Title";
import contatoMap  from '../../assets/images/contato-map.png';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="contato">
      <Title titleText={"Contact"} 
      />

      <div className="contato__endereco-box">
        <motion.img
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.0 }}
          src={contatoMap}
          alt="Imagem ilustrativa de um mapa"
          className="contato__img-map"
        />

        <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.0 }}
        >
          Rua Niterói, 180 - Centro <br />
          São Caetano do Sul - SP <br />
          <a href="tel:+551142252000" className="contato__telefone">
            (11) 4225-2000
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
