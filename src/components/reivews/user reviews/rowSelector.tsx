import React from 'react'

import ReviewData from '@/shared/reviewData';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { IoRadioButtonOff, IoRadioButtonOn } from "react-icons/io5";

interface Props {
    Data: ReviewData[];
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const rowSelector = ({Data, activeIndex, setActiveIndex}: Props) => {
const handleNextClick = (direction: string) => {
    if (direction === 'next') {
        if (activeIndex < Data.length - 1) {
            setActiveIndex(activeIndex + 1);
            } else {
            setActiveIndex(0);
            }
        } 
    else if (direction === 'previous') {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
            } else {
            setActiveIndex(Data.length - 1);
            }
        } 
    };
    
  return (
    <div className='button-row'>
          <button className='btn-next-prev' onClick={()=>handleNextClick("previous")}><AiOutlineLeft /></button>
          <div className="inline-selector">
            {Data.map((_, index)=>(
              <button className='item-selectors' onClick={()=>setActiveIndex(index)}>
              {index === activeIndex ? <IoRadioButtonOn /> : <IoRadioButtonOff />}
            </button>
            ))}
          </div>
          <button className='btn-next-prev' onClick={()=>handleNextClick("next")}><AiOutlineRight /></button>
      </div>
  )
}

export default rowSelector