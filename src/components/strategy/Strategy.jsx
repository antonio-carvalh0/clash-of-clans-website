import React from 'react'
import vid from '../../assets/defense.mp4'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './strategy.css'

const Strategy = () => {

    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();

    return (
        <div className='strategy' id='strategy'>
            <h1><span className='orange'>S</span>TRATEG<span className='orange'>Y</span></h1>
            <p>Victory in Clash of Clan is not solely achieved on the battlefield; it is meticulously crafted in the war room through strategic planning, resource management, and the artful deployment of forces. In this game of wits, a well-executed strategy is the true key to triumph</p>
            <div className='strategy__video'>
                <video
                    ref={vidRef}
                    src={vid}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    className='video'
                />
                <div className="strategy__video-overlay flex__center">
                    <div className="strategy__video-overlay-circle flex__center"
                        onClick={() => {
                            setPlayVideo(!playVideo);
                            if (playVideo) {
                            vidRef.current.pause();
                            } else {
                            vidRef.current.play();
                            }
                        }}>
                        {playVideo ? (
                            <BsPauseFill color="#fff" fontSize={30} />
                        ) : (
                            <BsFillPlayFill color="#fff" fontSize={30} />
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Strategy