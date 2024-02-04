import React from 'react'
import './town.css'
import {town_halls} from '../../constants/data'
import {BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Town = () => {
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
        <div className='town' id='townhall'>
            <h1 className='town__h1 nowrap'>TOWN <span className='orange'>HALL</span></h1>
            <p className='town__p'>Within the heart of every village, the <span className='orange'>Town Hall</span> stands tall - an emblem of progress, a bastion of <span className='orange'>dreams</span>. Upgrade its walls, fortify its spirit, for in its growth, the legacy of a kingdom unfolds.</p>
            <div className='town__halls'>
                <div className='town__halls__images-container' ref={scrollRef}>
                {town_halls.map((halls) => {
                    return (
                        <div className='town__halls__images-card'>
                            <div>
                                <img src={halls.img}/>
                            </div>
                            
                            <h3>Town <span className='orange'>Hall</span> {halls.number}</h3>
                            <button className='custom__button nowrap flex__center'>Learn more</button>
                        </div>
                    )
                })}
                </div>
                <div className="town__halls__images-arrows">
                    <BsArrowLeftShort className="town__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="town__arrow-icon" onClick={() => scroll('right')} />
                </div>
                
            </div>

        </div>
    )
}

export default Town