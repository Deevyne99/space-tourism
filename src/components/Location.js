import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useGlobalContext } from '../contex'
function Location() {
  const { info, count, btnRef, handleSlide, isActive } = useGlobalContext()
  const { destinations } = info
  // console.log(destinations)
  const { name, images, description, distance, travel } = destinations[count]

  return (
    <section className='section-destination'>
      <Navbar />
      <div className='container'>
        <div className='location-info'>
          <article className='destination-section'>
            <p className='destination-header'>01 pick your destination</p>
            <div className='img-container'>
              <img className='photo' src={images.png} alt='' />
            </div>
          </article>

          {/* <div className='underline'></div> */}
          <div className='travel-data'>
            <div className='btn-container'>
              {info.destinations.map((item, index) => {
                const { name } = item
                // console.log(name)
                return (
                  <button
                    ref={(item) => (btnRef.current[index] = item)}
                    onClick={() => handleSlide(index)}
                    className={`btn-destination ${
                      isActive === index ? 'active' : ''
                    }`}
                    id={index}
                    key={index}
                  >
                    {name}
                  </button>
                )
              })}
            </div>
            <h2 className='title-header'>{name}</h2>
            <p className='text'>{description}</p>
            <div className='line'></div>
            <div className='distance'>
              <div className='average'>
                <p className='average-text'>AVG. DISTANCE</p>
                <h2 className='distance-text'>{distance}</h2>
              </div>
              <div className='total'>
                <p className='average-text'>Est. travel time</p>
                <h2 className='distance-text'>{travel}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
