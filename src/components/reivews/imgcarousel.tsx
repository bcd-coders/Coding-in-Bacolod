import './reviews.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { imgs } from '@/shared/imgs'
import { useState } from 'react';

function imgcarousel() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currImg, setCurrImg] = useState(0)

    return (
        <div className="popup-img" style={{ backgroundImage: `url(${imgs[currImg].image})` }}>
            <div
                className="left"
                onClick={() => {
                    currImg > 0 && setCurrImg(currImg - 1);
                }}
            >
                <AiOutlineArrowLeft style={{ fontSize: 30 }} />
            </div>
            <div className="center">
            </div>
            <div
                className="right"
                onClick={() => {
                    currImg < imgs.length - 1 && setCurrImg(currImg + 1);
                }}
            >
                <AiOutlineArrowRight style={{ fontSize: 30 }} />
            </div>
        </div>
    )
}

export default imgcarousel