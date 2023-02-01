import React from 'react'
import { SECTION1 } from '../Section/data'
import './Step.scss'
const Step = () => {
  return (
    <>
    <div className='step-container__inner'>
                        {SECTION1.map((item,index) =>
                          <div key={index} className='step-container__inner-item'>
                           <div>
                            <img src={item.img} alt="" width={80} height ={80}/>
                            </div>
                            <div>
                                <h2>{item.title}
                              
    
                                </h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                        )}
                        
                       
                     </div>
                     
        </>
  )
}

export default Step