import React from 'react'

const Social = () => {
  return (
    <div>
 <div className='home-page__section-container'>
                        <div className='home-page__section-container__text'>
                            <div><h1>Social is Your Superpower</h1></div>
                            <div className='home-page__section-container__text1'>
                                Easily publish, engage, listen, report all your social 
                                media and get results with PostLater. All in one social 
                                media management platform. All in one social media 
                                management platform.</div>

                                <div className='home-page__section-container__text-form'>
                                <span style={{display: 'none'}}>E-mail</span>
                                <p>no credit card required</p>
                                <input type="text" placeholder='Your E-mail address*'/>
                                <div className='home-page__section-container__text-form__button'>
                                <button  className='social-button'>Get Start</button>
                                </div>
                                </div>
                        </div>
                        <div className='home-page__section-container__text'>
                            <img className='home-page__section-container__text-img' src="https://staging.postlater.io/assets/landing/img/social-header.png" alt="" />
                        </div>

                    </div>
    </div>
  )
}

export default Social;