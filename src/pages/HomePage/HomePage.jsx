import React, { useEffect, useState } from "react";
import "./HomePage.css";

import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/MainContent/MainContent";
import VisionSection from "../../components/VisionSection/VisionSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Title from "../../components/Title/Title";
import NextEvent, { DetalhesEvents } from "../../components/NextEvent/NextEvent";
import Container from "../../components/Container/Container";
import Notification from "../../components/Notification/Notification";

import api, { eventsResource } from '../../Services/Service';
import { nextEventResource } from '../../Services/Service';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./HomePage.css";

import { Pagination } from "swiper/modules";


const HomePage = () => {
  const [nextEvents, setNextEvents] = useState([]);
  const [backEvents, setBackEvents] = useState([]);
  const [notifyUser, setNotifyUser] = useState([])

  //roda somente na inicialização do componente
  useEffect(() => {
    async function getNextEvents() {
      try {
        const promise = await api.get(nextEventResource)
        const dados = await promise.data;

        setNextEvents(dados); //atualiza o state
      } catch (error) {
        console.log(error);
      }
    }

    async function getBackEvents() {
      try {
        const request = await api.get(eventsResource)

        setBackEvents(request.data)

      } catch (error) {
        alert("Deu ruim no back Events")
        console.log(error);
      }
    }

    getNextEvents();
    getBackEvents(); 
  }, [])



  return (

    <MainContent>
      {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
      <Banner />

      {/* PRÓXIMOS EVENTOS */}
      <section className="proximos-eventos">
        <Container>

          <Title titleText={"Próximos Eventos"} />

          <div className="events-box">

          <Swiper
        slidesPerView={ window.innerWidth >= 992 ? 3 : 1 }
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        >

            {nextEvents.map((e) => {
              return (
                <SwiperSlide>
                 <NextEvent
                    key={e.idEvento}
                    idEvent={e.idEvento}
                    title={e.nomeEvento}
                    description={e.descricao}
                    eventDate={e.dataEvento}
                    linkText={"Conectar"}
                  />
                 </SwiperSlide>
              );
            })}
                </Swiper> 
          </div>


          <Title titleText={"All Events"} />
            <div className="events-box">
            <Swiper
        slidesPerView={ window.innerWidth >= 992 ? 3 : 1 }
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        > 
              {backEvents.map((e) => {
                return (
                  <SwiperSlide>
                  <DetalhesEvents
                    key={e.idEvento}
                    idEvent={e.idEvento}
                    title={e.nomeEvento}
                    description={e.descricao}
                    eventDate={e.dataEvento}
                    text={"Visualizar"}
                  />
                   </SwiperSlide>
                );
              })}
              </Swiper> 
              

   
          </div>
        </Container>

      </section>

      <VisionSection />
      <ContactSection />
    </MainContent >
  );
};

export default HomePage;