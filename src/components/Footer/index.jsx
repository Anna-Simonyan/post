import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import { ReactComponent as Pos } from 'assets/icons/pos.svg'
import { FOOTER_IMG, FOOTER_LI, FOOTER_LINK1, FOOTER_LINK2, FOOTER__DATA } from 'page/Home/components/Section/data'


const Footer = () => {
  return (
    <div className='page-footer'>
<div className='page-footer__container'>
<div className="footer__row-1">
            <div className="footer__row-1-columns">
                <div className="footer__column column-1">
                    <div>
                        <p className="column-title">Postlater</p>
                    </div>
                    <div className="column-p">
                        {
                            FOOTER__DATA.map((item,id)=><p key={id}><Link href="https://staging.postlater.io">{item.text}</Link></p>)
                        }
                      
                    </div>
                </div>
                <div className="footer__column column-2">
                    <div>
                        <p className="column-title">Integrations</p>
                    </div>
                    <div className="column-p">
                    {
                            FOOTER_LI.map((item,id)=><p key={id}><Link href="https://staging.postlater.io">{item.text}</Link></p>)
                        }
                        
                    </div>
                </div>
                <div className="footer__column column-3">
                    <div>
                        <p className="column-title">Features</p>
                    </div>
                    <div className="column-p">
                        {       
                            FOOTER_LINK1.map((item,id)=><p key={id}><Link href="https://staging.postlater.io">{item.text}</Link></p>)
                        }
                    </div>
                </div>
                <div className="footer__column column-4">
                    <div>
                        <p className="column-title">Compare</p>
                    </div>
                    <div className="column-p">
                    {       
                            FOOTER_LINK2.map((item,id)=><p key={id}><Link href="https://staging.postlater.io">{item.text}</Link></p>)
                        }
                       
                    </div>
                </div>
                <div className="footer__column column-5">
                    <div>
                        <div>
                            <p className="column-title">Support</p>
                        </div>
                        <div className="column-p">
                            <p>info@postlater.io</p>
                            <p>+374 44993393</p>
                        </div>
                    </div>

                    <div className="footer-app-icons">
                        <Link><img src="https://staging.postlater.io/assets/landing/img/icon-app-ios.svg"/></Link>
                        <Link><img src="https://staging.postlater.io/assets/landing/img/icon-app-google.svg"/></Link>
                    </div>
                </div>
            </div>
        </div>


        <div className ="footer__row-2">
            <div>
                <div>
                    <Link href="https://staging.postlater.io">
                        <Pos/>
                    </Link>
                    <div className="footer__info-terms">
                        <p>© 2021 PostLater</p>
                        <ul>
                            <li> <Link href="https://staging.postlater.io/terms-of-service">Terms of Service</Link></li>
                            <li><Link href="https://staging.postlater.io/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div>
                {       
                            FOOTER_IMG.map((item,id)=><Link key={id}><img src={item.img} style={{    marginRight: '16px'}}/></Link>)
                        }
                   
                </div>
            </div>
        </div>



        
</div>
    </div>
  )
}

export default Footer