import React from 'react'
import Navbar from './Navbar'
function Introduction() {
  return (
    <section className='section-center'>
      <Navbar />
      <div className='container home'>
        <article className='article-home'>
          <p className='heading'>so you want to travel to</p>
          <h1 className='title'>space</h1>
          <p className='info'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <div className='explore'>
          <h4 className='explore-text'>Explore</h4>
        </div>
      </div>
    </section>
  )
}

export default Introduction
