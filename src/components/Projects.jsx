import React, { useState } from 'react'
import pj1 from '../assets/img/pj1.png'
import pj2 from '../assets/img/pj2.png'
import pj3 from '../assets/img/pj3.png'

function Projects() {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pj1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pj2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pj3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pj1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pj2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: pj3,
    },
  ];

  const [toggle, setToggle] = useState(1)

  const changeToggle = (index) => {
    setToggle(index)
  }

  return (
    <div className='projects container'>
      <div className="top-part">
        <div
          className={toggle === 1 ? 'tabs active-tab' : 'tabs'}
          onClick={() => { changeToggle(1) }}>Tab 1
        </div>
        <div
          className={toggle === 2 ? 'tabs active-tab' : 'tabs'}
          onClick={() => { changeToggle(2) }}>Tab 2
        </div>
        <div
          className={toggle === 3 ? 'tabs active-tab' : 'tabs'}
          onClick={() => { changeToggle(3) }}>Tab 3
        </div>
      </div>
      <div className="bottom-part">
        <div
          className={toggle === 1 ? 'page1' : 'none'}>
          <h1>React Projects</h1>
          <div className='content'>
            {
              projects.map((e, index) => {
                return (
                  <div>
                    <img width={400} src={projects[index].imgUrl} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div 
          className={toggle === 2 ? 'page' : 'none'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat accusantium dignissimos neque illo soluta nostrum natus ullam officia, laborum, molestias dolore sed, minima itaque unde veritatis voluptatum nulla quidem ipsum suscipit perferendis nisi impedit. Assumenda, ex beatae? Dolor cum asperiores at enim consequuntur laboriosam quisquam ratione, neque a molestiae.
          </div>
          <div 
          className={toggle === 3 ? 'page' : 'none'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat accusantium dignissimos neque illo soluta nostrum natus ullam officia, laborum, molestias dolore sed, minima itaque unde veritatis voluptatum nulla quidem ipsum suscipit perferendis nisi impedit. Assumenda, ex beatae? Dolor cum asperiores at enim consequuntur laboriosam quisquam ratione, neque a molestiae.
          </div>
      </div>
    </div>
  )
}

export default Projects
