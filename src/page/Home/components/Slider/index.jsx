
    

import { useState } from 'react'
 import arrow from '../../../../assets/images/yellow-arrow.png'
 import './Slider.scss'

  
  const Slider = () => {
    const[items,setItems]=useState([
      {
        id:1,
        stage: 'stage ',
        img:'https://staging.postlater.io/assets/landing/img/color-stage-1.png',
        title: 'Publish',
        key: 1,
        // width:'250px',
        
    },
    {
        id:2,
        stage: 'stage ',
        img:'https://staging.postlater.io/assets/landing/img/color-stage-2.png',
        title: 'Engage',
        key: 2,
        width: "200px",
        height:'200px'

    },
    {
        id:3,
        stage: 'stage ',
        img:'https://staging.postlater.io/assets/landing/img/color-stage-3.png',
        title: 'Monitor',
        key: 3,
        width: "150px",
        height:'150px'
    },
    {
        id:4,
        stage: 'stage ',
        img:'https://staging.postlater.io/assets/landing/img/color-stage-4.png',
        title: 'Analyze',
        key: 4,
        width: "100px",
        height:'100px'
    },
    {
        id:5,
        stage: 'stage ',
        img:'https://staging.postlater.io/assets/landing/img/color-stage-5.png',
        title: 'Autorespond',
        key: 5,
        width: "200px",
        height:'100px',

    },
    {
        id:6,
        stage: 'stage ',
        img:'https://staging.postlater.io/assets/landing/img/color-stage-6.png',
        title: 'Competitive  ',
        key: 6,
        width: "150px",
        height:'150px'
    },
    {
        id:7,
        stage: 'stage ',
        img:'https://staging.postlater.io/assets/landing/img/color-stage-7.png',
        title: 'Team Member  ',
        key: 7,
        width: "100px",
        height:'200px'
    }
  ])

  const prevClick=()=>{
    setItems(prev =>{
      const arr=[...prev]
      arr.unshift(arr.pop())

      return arr
    })
  };

  const nextClick =()=>{
    setItems(prev =>{

      const arr = [...prev];
      arr.push(arr.shift());

      return arr
    })
  }

  console.log(items,"array")
    
    return (
      <div className='gallery'>
        <div style={{display:'flex',width:'100%',position:'relative'}}>
          {items.map((item,id)=>(
            <div className={`gallery-item-${id+1}`}>
          <p key={item.id}>{item.stage}{item.id}</p>
          <div className='gallery-img'><img src={item.img} alt="" /></div>
          <div className='title'>{item.title}</div>
          
          </div>
          
          ))}
           
        </div>
      
        <div className='gallery-controls' >
       
          <button onClick={prevClick}>
   
    <img src={arrow} alt=""  />
      
          </button>
       
          <button> </button>

        
          <button className='arrowRight'  onClick={nextClick}>
      <img src={arrow} alt="" /> 
          </button>
          <div className='container-centerMode__text'><p>It is a long established
                        fact that a reader will be distracted by
                        the readable content of a page</p></div>
        </div>


       

      </div>
    )
  }
  
  export default Slider