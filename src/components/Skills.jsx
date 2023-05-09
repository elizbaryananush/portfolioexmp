import React from 'react'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'

function Skills() {
  
  return (
    <div className='skills container'>
      <h1 className='Title'>Skills</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sit consequatur quis, nihil dolore animi accusantium quaerat maxime eveniet vero?</p>
      <svg onClick={() => {
        document.getElementById('Slider').scrollLeft -= document.getElementById('element').getBoundingClientRect().width;
     }} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512"><path d="M10.957,12.354a.5.5,0,0,1,0-.708l4.586-4.585a1.5,1.5,0,0,0-2.121-2.122L8.836,9.525a3.505,3.505,0,0,0,0,4.95l4.586,4.586a1.5,1.5,0,0,0,2.121-2.122Z" /></svg>
     
     
      <svg onClick={() => {
        document.getElementById('Slider').scrollLeft += document.getElementById('element').getBoundingClientRect().width;
     }} xmlns="http://www.w3.org/2000/svg" id="Bold" className='right' viewBox="0 0 24 24" width="512" height="512"><path d="M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z" /></svg>


      <div className="slider" id='Slider'>
        <div id='element'>
          <img src={meter1} />
          <h1>Javascript</h1>
        </div>
        <div>
          <img src={meter2} />
          <h1>Html</h1>
        </div>
        <div>
          <img src={meter3} />
          <h1>Css</h1>
        </div>
        <div>
          <img src={meter1} />
          <h1>Java</h1>
        </div>
        <div>
          <img src={meter2} />
          <h1>C++</h1>
        </div>
        <div>
          <img src={meter3} />
          <h1>Python</h1>
        </div>
      </div>
    </div>
  )
}

export default Skills
