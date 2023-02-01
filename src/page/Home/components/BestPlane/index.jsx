import React from 'react'
import './BestPlane.scss'

const BestPlane = () => {
    return (
        <div className='best-plane'>
            <div className='best-plane__container'>

                <div className='best-plane__container-title'>
                    <div>
                        <h2>
                            Compare And Decide Which Is More Convenient For You
                        </h2>
                        <div>
                            <button className='modal-button'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='best-plane__container-rounds'>
                    <div>
                        <div className='bussines-plan'>
                            <div>
                                <h3>For Business &<br></br>
                                    Personal users</h3>
                                <p>It is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        <div className='bussines-marketing'>
                            <div>
                                <h3>Marketing Agency<br></br>
                                    & Small Business</h3>
                                <p>It is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        <div className='bussines-bloggers'>
                            <div>
                                <h3>For Bloggers<br></br>
                                    & Authors</h3>
                                <p>It is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div >
                    <div>
                        <img src="https://staging.postlater.io/assets/landing/img/icon-polygon-2.svg" className="best-icon-1  " />
                        <img src="https://staging.postlater.io/assets/landing/img/icon-rectangle-2.svg" className="best-icon-2  " />
                        <img src="https://staging.postlater.io/assets/landing/img/icon-ellipse-1.svg" className="best-icon-3  " />
                        <img src="https://staging.postlater.io/assets/landing/img/icon-ellipse-1.svg" className="best-icon-4  " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestPlane