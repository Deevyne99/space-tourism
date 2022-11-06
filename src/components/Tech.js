import React from 'react'
import Navbar from './Navbar'
import { useGlobalContext } from '../contex'
function Tech() {
  const { info, techCount, handleTech, activeBtn } = useGlobalContext()
  const { technology } = info
  const { name, images, description } = technology[techCount]
  return (
    <section className='section-tech'>
      <Navbar />
      <div className='container remove'>
        <p className='destination-header tech'>03 SPACE LAUNCH 101</p>

        <div className='information'>
          <div className='image-box'>
            <img className='tech-photo' src={images.landscape} alt='' />
          </div>

          <article className='tech-data'>
            <div className='btn-wrapper'>
              <button
                onClick={() => handleTech(0)}
                className={`tech-btn ${activeBtn === 0 ? 'active' : ''}`}
              >
                1
              </button>
              <button
                onClick={() => handleTech(1)}
                className={`tech-btn ${activeBtn === 1 ? 'active' : ''}`}
              >
                2
              </button>
              <button
                onClick={() => handleTech(2)}
                className={`tech-btn  ${activeBtn === 2 ? 'active' : ''}`}
              >
                3
              </button>
            </div>
            <div className='bio bio-tech'>
              <p className='role role-tech'>THE TERMINOLOGY…</p>
              <h3 className='name'>{name}</h3>
              <p className='bio-data'>{description}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Tech
