import React from 'react'
import "./DescriptionBox.css"


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, molestiae ipsa voluptas illum ratione minus dignissimos animi veritatis odio officia pariatur, dolore iste nemo eos cupiditate! Deleniti reprehenderit fugit odio.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, officia quas aut blanditiis saepe tempora ex neque debitis optio facilis facere explicabo natus consectetur dolor illo reiciendis assumenda beatae praesentium?
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
