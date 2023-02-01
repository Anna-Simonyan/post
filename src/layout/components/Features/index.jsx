import { FEATURE_DATA, FEATURE_LI } from 'page/Home/components/Section/data';
import Item from 'page/Home/components/Slider/Item';
import React from 'react'
import { Link } from 'react-router-dom';
const Features = ({setIsHovering}) => {
    const mouseOver = () =>{
        setIsHovering(true)
    }
    const mouseOut = ()=> {
        setIsHovering(false)
    }
  return (
    
    
    <div onMouseOver={mouseOver} onMouseOut={mouseOut} className="dropdown-platform" >
                        <div className="dropdown-platform__div">
                            <div>
                                <p className="menu-title">Features</p>
                                <div>
                                    <div className="d-flex">
                                        <Link href="https://staging.postlater.io/publish">
                                            <div className="d-flex__inner">
                                                <div>
                                                    <img src="https://staging.postlater.io/assets/landing/img/menu-1.svg"/>
                                                </div>
                                                <div className="header-drop-publish">
                                                    <p>Publish</p>
                                                    <p>Share and schedule engaging content to your profiles
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href="https://staging.postlater.io/engage">
                                            <div className="d-flex__inner">
                                                <div>
                                                    <img src="https://staging.postlater.io/assets/landing/img/menu-2.svg"/>
                                                </div>
                                                <div className="header-drop-engage">
                                                    <p>Engage</p>
                                                    <p>Address incoming messages and deliver timely replies
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="d-flex">
                                        <Link href="https://staging.postlater.io/monitor">
                                            <div className="d-flex__inner">
                                                <div>
                                                    <img src="https://staging.postlater.io/assets/landing/img/menu-3.svg"/>
                                                </div>
                                                <div className="header-drop-monitor">
                                                    <p>Monitor</p>
                                                    <p>Stay informed about market trends and competitors
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href="https://staging.postlater.io/analyze">
                                            <div className="d-flex__inner">
                                                <div>
                                                    <img src="https://staging.postlater.io/assets/landing/img/menu-4.svg"/>
                                                </div>
                                                <div className="header-drop-analyze">
                                                    <p>Analyze</p>
                                                    <p>Measure your results across all social networks
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                               
                            </div>
                            <div className="header-drop-button">
                                <button className="btn-hover">
                                    <Link href="https://staging.postlater.io/manage">See All Features</Link>
                                </button>
                            </div>
                            <div className='dropdown-netwoks'>
                                <p className="dropdown-menu-title">Networks / Integrations</p>
                                <div>
                                    <ul>
                                       
                                        {
                                            FEATURE_LI.map((item)=> <li key={item}>
                                            <Link href="https://staging.postlater.io/integration/facebook">{item.text}</Link>
                                        </li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    
 
  )
}

export default Features;