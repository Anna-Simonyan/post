
import React,{ useState} from 'react'
import Support from './components/Support'
import Social from './components'
import './Home.scss'
import Section from './components/Section'
import Cart from './components/Cart'
import Step from './components/Step'
import { SECTION,  SECTION3 } from './components/Section/data'
import Slider from './components/Slider'
import HomeModal from './components/HomeModal'
import BestPlane from './components/BestPlane'
import Rating from '@mui/material/Rating';
import AutoSlider from './components/AutoSlider'
import { SECTION4 } from './components/Section/data'
import Footer from 'components/Footer'
const Home = () => {
    
    const [value, setValue] = useState(5);
    return (
        
        
           
        <div className='general-home'>
                 
             <HomeModal/>
            <div className='home-page'>
                <div className='home-page__section' >
                    <Social />

                </div>
                <div className='home-page__second'>
                    <Support />
                </div>
                <div id="swimming">
                    <div className="bubble_wrap">
                        <div className="bubbles b2"> <img src='	https://staging.postlater.io/assets/landing/img/icon-polygon-2.svg' /></div>
                        <div className="bubbles b1"><img src='https://staging.postlater.io/assets/landing/img/icon-rectangle-1.svg' /></div>
                        <div className="bubbles b2"> <img src='https://staging.postlater.io/assets/landing/img/icon-ellipse-1.svg' /></div>

                    </div>
                </div>
                <div>
                    <Section title='What You Get' text='It is a long established fact that a reader will 
                be distracted by the readable content of a page when 
                looking at its layout. The point of using Lorem Ipsum
                 is that it has a'  />
 <div className='section-container__inner'>
  {SECTION.map((item,index) =>
  
                   <Cart key={index} arr = { <div  className='section-container__inner-item'>
                       <div>
                        <img src={item.img} alt="" width={80} height ={80}/>
                    
                        </div>
                        <div>
                            <h2>{item.titleOne}<br></br>
                            {item.titleTwo}

                            </h2>
                            <p>{item.text}</p>
                        </div>
                    </div>}
                    /> 
                    
                     )}
                     </div>
                </div>
                <div id="swimming">
                    <div className="bubble_wrap">
                        <div className="bubbles b2"> <img src='	https://staging.postlater.io/assets/landing/img/icon-polygon-2.svg' /></div>
                        <div className="bubbles b1"><img src='https://staging.postlater.io/assets/landing/img/icon-rectangle-1.svg' /></div>
                        <div className="bubbles b2"> <img src='	https://staging.postlater.io/assets/landing/img/icon-polygon-2.svg' /></div>

                    </div>
                </div>
                <div>
                    <Section title='How It Works' text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum' cart={<Step />} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div className='home-page__section-container__text-form'>
                        <button  className='social-button'> Get Started </button>
                    </div>
                </div>

                <div className="container">


                    <div id="swimming">
                        <div className="bubble_wrap">
                            <div className="bubbles b1"><img src='https://staging.postlater.io/assets/landing/img/icon-rectangle-1.svg' /></div>
                            <div className="bubbles b2"> <img src='	https://staging.postlater.io/assets/landing/img/icon-polygon-2.svg' /></div>

                        </div>
                    </div>


                </div>
                {/* </div> */}

                <div className='features'>
                    <Section title='Features' text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a  more-or-less normal '/>
                </div>

                {/* <div><Slider slides={SECTION2}/></div> */}
 
                <div className='container-centerMode'>
               
                    <Slider />

                    
                   
                </div> 

                {/* <Carousel items={items} active={0}/> */}

<div style={{marginTop:'600px'}}>
    <BestPlane/>
</div>
<div>
 <Section  title='What Our Customers Says' />
 {/* {SECTION.map((item)=>
 <Cart img={item.img} />
 )} */}
 <div className='section-container__inner'>
  {SECTION3.map((item,index) =>
  
                   <Cart key={index} arr = { <div  className='section-container__inner-item'>
                       <div>
                        <img src={item.img} alt="" width={80} height ={80}/>
                    
                        </div>
                        <div>
                            <p className='section-container__inner-item__p'>{item.titleOne}
                            </p>
                            <div> <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /></div>
                            <p>{item.text}</p>
                        </div>
                    </div>}
                    /> 
                    
                     )}
                     
                     </div>
                     </div>
                     <div ><Section title='Partners'/></div>

                     <div style={{marginTop:'110px',width:'98%',}}>
                        <AutoSlider/>
                     </div>

                     <div><Section title='Crush Your Social Goals ' title1='Again And Again' text = 'Pick the Later plan that works for you (and your biz) and watch the likes – and the sales – roll in. Available on Instagram, Facebook, Twitter, Pinterest, LinkedIn, and TikTok.' />
                     <div className='section-container__inner'>
  {SECTION4.map((item,index) =>
  
                   <Cart key={index} arr = { <div  className='section-container__inner-item'>
                       <div>
                        <img src={item.img} alt="" width={124} height ={124} className='cart-img'/>
                    
                        </div>
                        <div>
                            <p>{item.titleOne}<br></br>
                            {item.titleTwo}

                            </p>
                            <p>{item.text}</p>
                        </div>
                    </div>}
                    /> 
                    
                     )}
                     
                     </div>
                     <button className='button'>Start 7 Days Free Trial</button>
                     <p className='button-p'>no credit card required</p>
                     </div>

                     <Footer/>
               
                </div>
                <div className='img-home'>
<img src="	https://staging.postlater.io/assets/landing/img/home-bg-1920.png" alt="" className='img-1'/>
{/* <img src="	https://staging.postlater.io/assets/landing/img/home-bg-1550.png" alt="" className='img-2'/>
<img src="	https://staging.postlater.io/assets/landing/img/home-bg-1350.png" alt="" className='img-3' />
<img src="https://staging.postlater.io/assets/landing/img/home-bg-992.png" alt="" className='img-4' /> */}
</div>

            </div>
            
       
        
    )
}

export default Home