import React, { useState } from 'react'
import { ReactComponent as Pos } from 'assets/icons/pos.svg'
import { Link } from 'react-router-dom'
import Features from './Features'


const Header = () => {
    const [headerLinks, setHeaderLinks] = useState([
        {
            title: 'Platform',
            active: true
        },
        {
            title: 'Pricing',
            active: false
        },
        {
            title: 'About Us',
            active: false
        },
        {
            title: 'Blog',
            active: false
        },
        {
            title: 'How to Use',
            active: false
        },


    ])
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = (index) => {
        if (index === 0) {
            setIsHovering(true);
        }

    };

    const handleMouseOut = (index) => {
        if(index!==0){
        setIsHovering(false);
        }

    };

    const handleActiveLInk = (e, index) => {
        headerLinks.map((item) => item.active = false);
        headerLinks[index].active = !headerLinks[index].active;
        setHeaderLinks([...headerLinks])

    }

    return (
        <div className='header'>
            <div className='header__container'>
                <div className='header__container-img'>
                    <Link href="https://staging.postlater.io">
                        <Pos />

                    </Link>

                </div>
                <div className='header__container-links'>
                    <ul className='header__container-links__ul'>

                        {headerLinks.map((link, index) => <li id={index === 0 ? "hover_li" : null} key={index}
                            onMouseOver={() => handleMouseOver(index)}
                             onMouseOut={() => handleMouseOut(index)} 
                            onClick={(e) => handleActiveLInk(e, index)} className={link.active ? 'active' : 'inactive'}><Link>{link.title}</Link>


                        </li>)}

                    </ul>
                    {isHovering && (
                    <Features setIsHovering={setIsHovering}  />
                    )} 

                </div>
                <div className='header__container-sign'>
                    <div>
                        <p>
                            Log in
                        </p>
                    </div>
                    <div className='header__container-sign__button'>
                        <button><p>Start 7 Days Free Trial</p></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header