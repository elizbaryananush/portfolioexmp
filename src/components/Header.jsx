import React from 'react'
import background from '../assets/img/header.png'
import background2 from '../assets/img/header-img.svg'

function Header() {
  return (
    <div className='header'>
      <img className='background' src={background} />
      <img className='background2' src={background2} />

      <div className="left-part">
        <div>
          <h2>Welcome to my Portfolio</h2>
        </div>
        <h1>This is a portfolio example</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Veniam molestias, quas, voluptatibus expedita recusandae
          quo ad esse eum suscipit inventore possimus? Repellendus
          hic quasi fuga magnam vero sint cumque excepturi, officiis
          repellat architecto impedit eveniet! Eligendi, et deserunt.
          Minus dolorem vitae consequuntur porro quo veniam tenetur
          tempora ullam enim magni?</p>
        <div className='bottom'> 
          <a href="#">Let's Connect
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="512" height="512"><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm22,0A10,10,0,1,1,12,2,10.011,10.011,0,0,1,22,12ZM13.121,6.293a1,1,0,0,0,0,1.414L16.413,11,6,11.007a1,1,0,1,0,0,2L16.414,13l-3.293,3.293a1,1,0,1,0,1.389,1.438l.025-.024,3.586-3.585a3,3,0,0,0,0-4.243h0L14.535,6.293A1,1,0,0,0,13.121,6.293Z" /></svg>
        </div>
      </div>
    </div>
  )
}

export default Header
