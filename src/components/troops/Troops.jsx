import React from 'react'
import {troops} from '../../constants/data.js'
import './troops.css'

import {BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Troops = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
     };

    return (
        <div className='troops' id='troops'>
            <h1 className='troops__h1'>TR<span className='orange'>OO</span>PS</h1>
            <p className='troops__p'>In the symphony of war, troops are the notes that echo bravery. From archers to giants, each step they take on the battlefield is a chord in the anthem of victory</p>
            <div className='troops__units'>
                <div className='troops__units__images-container' ref={scrollRef}>
                    {troops.map((troop) => {
                        return (
                            <div className='troops__units__images-card'>
                                <div>
                                    <img src={troop.img}/>
                                </div>
                                
                                <h3><span className='orange'>NAME:</span> {troop.name}</h3>
                                <button className='custom__button nowrap flex__center'>Learn more</button>
                            </div>
                        )
                    })}
                </div>
                <div className="troops__units__images-arrows">
                    <BsArrowLeftShort className="troops__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="troops__arrow-icon" onClick={() => scroll('right')} />
                </div>
                
            </div>

        </div>
    )
}

export default Troops