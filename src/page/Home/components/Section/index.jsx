
import React from 'react'
import { SECTION } from './data'
import Cart from '../Cart'
const Section = ({title,text,cart,title1}) => {
    return (
        <div className='section-container'>
            <div className='section-container__header'>
            <h1>{title}<br></br>{title1}</h1>
            <p>{text}</p>
                 </div>
                 <div>{cart}</div>
                 
                 
        </div>
    )
}

export default Section