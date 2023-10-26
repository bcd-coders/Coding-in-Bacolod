import './reviews.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useState } from 'react';

interface Props {
    images: string[]
}

function imgcarousel({images}: Props) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currImg, setCurrImg] = useState(0)
    const handleNextClick = (direction: string) => {
        if (direction === 'next') {
            if (currImg < images.length - 1) {
                setCurrImg(currImg + 1);
                } else {
                setCurrImg(0);
                }
            } 
        else if (direction === 'previous') {
            if (currImg > 0) {
                setCurrImg(currImg - 1);
                } else {
                setCurrImg(images.length - 1);
                }
            } 
        };

    return (
        <div className="popup-img" style={{ backgroundImage: `url(${images[currImg]})` }}>
            <div className="left" onClick={()=>handleNextClick("previous")}>
                <AiOutlineArrowLeft style={{ fontSize: 30 }} />
            </div>
            <div className="center">
            </div>
            <div className="right" onClick={()=>handleNextClick("next")}>
                <AiOutlineArrowRight style={{ fontSize: 30 }} />
            </div>
        </div>
    )
}

export default imgcarousel