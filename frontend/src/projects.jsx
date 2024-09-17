import React, { useRef, useState } from 'react';
import './project.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './project.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import plant from './assets/planting.jpg'
import air from './assets/airplane.jpg';
import h2o from './assets/water.jpg';
import wind from './assets/solar.jpg';

export default function Project() {
  return (
    <>
      <div className=" card1 projects-section">
        <h2>Projects your company is supporting</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="projects-section">
              <div className="project-card">
                <h3>Give me trees (Afforestation Campaign in Delhi)</h3>
                <p>
                  {' '}
                  The Delhi government has been working on restoring the AQI,
                  reducing carbon footprints and has initiated an campaign by
                  the name GiveMeTrees.{' '}
                </p>
                <a href="https://www.givemetrees.org/volunteer#">
                  <img
                    src={plant}
                    alt="plantTrees"
                    style={{
                      height: '30vh',
                      borderRadius: '10px',
                      width: '98%',
                      marginLeft: '15px',
                      marginBottom: '10px',
                      // padding: '10px',
                    }}
                  />
                </a>
                Take initiative and create an impact today!
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="projects-section">
              <div className="project-card">
                <h3>Offset your flight's carbon emission</h3>
                <p>
                  {' '}
                  If you care about the planet, please join International
                  Volunteer HQ in going carbon neutral when you volunteer abroad
                  with us. By offsetting your flights to your volunteer program,
                  you will help fight climate change and protect at-risk
                  wildlife and communities around the world.{' '}
                </p>
                <a href="https://www.volunteerhq.org/carbon-footprint-calculator/">
                  <img
                    src={air}
                    alt="plane"
                    style={{
                      height: '30vh',
                      borderRadius: '10px',
                      width: '98%',
                      marginLeft: '15px',
                      marginBottom: '10px',
                      // padding: '10px',
                    }}
                  />
                </a>
                Take initiative and create an impact today!
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="projects-section">
              <div className="project-card">
                <h3>Water Pollution Control (Volunteer water monitoring)</h3>
                <p>
                  At least twice a month during the summer, volunteers measure
                  water clarity using a Secchi disk or tube at designated
                  locations on lakes or streams. During each visit, they record
                  their reading and observations on the physical and
                  recreational conditions of their lake or stream.
                </p>
                <a href="https://www.pca.state.mn.us/get-engaged/volunteer-water-monitoring">
                  <img
                    src={h2o}
                    alt="water"
                    style={{
                      height: '30vh',
                      borderRadius: '10px',
                      width: '98%',
                      marginLeft: '15px',
                      marginBottom: '10px',
                      // padding: '10px',
                    }}
                  />
                </a>
                Take initiative and create an impact today!
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div className="projects-section">
              <div className="project-card">
                <h3>Help the Environment (Volunteer for renewable energies)</h3>
                <p>
                  Volunteering with SunWork is a great way to learn about solar,
                  help the environment, and give back to your community.
                </p>
                <a href="https://sunwork.org/volunteer/">
                  <img
                    src={wind}
                    alt="mill"
                    style={{
                      height: '30vh',
                      borderRadius: '10px',
                      width: '98%',
                      marginLeft: '15px',
                      marginBottom: '10px',
                      // padding: '10px',
                    }}
                  />
                </a>
                Take initiative and create an impact today!
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
