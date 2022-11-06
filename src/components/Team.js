import React from 'react'
import { useGlobalContext } from '../contex'
import Navbar from './Navbar'
const Team = () => {
  const { info, teamCount, handleTeam, active } = useGlobalContext()
  const { crew } = info
  const { name, images, bio, role } = crew[teamCount]
  return (
    <>
      <section className='section-crew'>
        <Navbar />
        <div className='container'>
          <p className='destination-header'>02 Meet your crew</p>
          <div className='container-content'>
            <div className='img-container image'>
              <img className='photo photo-crew' src={images.png} alt={name} />
            </div>
            <div className='division'></div>
            <div className='crew-data'>
              <div className='crew-btn'>
                <button
                  className={`btn-crew ${active === 0 ? 'active' : ''}`}
                  onClick={() => handleTeam(0)}
                  id={1}
                ></button>
                <button
                  className={`btn-crew ${active === 1 ? 'active' : ''}`}
                  id={2}
                  onClick={() => handleTeam(1)}
                ></button>
                <button
                  className={`btn-crew ${active === 2 ? 'active' : ''}`}
                  id={3}
                  onClick={() => handleTeam(2)}
                ></button>
                <button
                  className={`btn-crew ${active === 3 ? 'active' : ''}`}
                  id={4}
                  onClick={() => handleTeam(3)}
                ></button>
              </div>
              <div className='bio'>
                <p className='role'>{role}</p>
                <h3 className='name'>{name}</h3>
                <p className='bio-data'>{bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
