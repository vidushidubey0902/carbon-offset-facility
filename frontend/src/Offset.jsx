import React from 'react';
import './offset.css';
import pt from './assets/plant3D.png';
import pl from './assets/plane.gif';
import car from './assets/car3D.gif';

const Offset = () => {
  return (
    <div className="offset-container">
      <h2>Your CO2 offset is equivalent to:</h2>

      {/* Offset Values */}
      <div className="offset-values">
        <div className="left-section">
          <div className="offset-card">
            <h1>
              4,676
              <p>
                years worth of carbon savings from plant-based living.
                <br />
                <a href="#!">
                  Living plant-based saves approximately 0.8 tonnes of CO2 per
                  year.
                </a>
              </p>
              <img
                src={pt}
                alt="plant"
                style={{
                  height: '30vh',
                  marginLeft: '500px',
                  marginTop: '0px',
                  justifyContent: 'flex-end',
                }}
              />
            </h1>
          </div>
          <div className="offset-card">
            <h1>
              9.28 mn
              <p>
                miles driven in the average car.
                <br />
                <a href="#!">
                  The average person drives 13,476 miles per year, emitting 5.43
                  tonnes of CO2.
                </a>
                {/* <img
                  src={car}
                  alt="car"
                  style={{
                    height: '32vh',
                    marginLeft: '450px',
                    justifyContent: 'flex-end',
                  }}
                /> */}
              </p>
            </h1>
          </div>
        </div>
        <div className="right-section">
          <div className="offset-card full-height">
            <h1>
              4,011
              <p>
                roundtrip flights from London to Los Angeles worth of carbon
                saved.
                <br />
                <a href="#!">
                  On average one round trip creates 932.7 kg of emissions. This
                  calculation varies by airline.
                </a>
              </p>
              <img
                src={pl}
                alt="air"
                style={{ height: '62vh', marginLeft: '80px' }}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offset;
