import React from 'react'
import FooterCss from './Footer.module.css'

const Footer = () => {
  return (
    <div className={FooterCss.footerContainer}>
        <div className={FooterCss.insideContainer}>
            <div className={FooterCss.containerBox}>
                <h4>BEAUTIQUE</h4>
                <div className={FooterCss.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                </div>
            </div>
            <div className={FooterCss.footer}>
                <h4>About Us</h4>
                <h5>Careers</h5>
                <h5>Our Stores</h5>
                <h5>Terms & Conditions</h5>
                <h5>Privacy Policy</h5>
            </div>
            <div className={FooterCss.footer}>
                <h4>Help Center</h4>
                <h5>Track Your Order</h5>
                <h5>Corporate & Bulk Purchasing</h5>
                <h5>Returns & Refunds</h5>
            </div>
            <div className={FooterCss.address}>
                <h4>Contact us</h4>
                <h5>28 Birdie Street Johanesburg Gauteng 2001</h5>
                <h5>M@beautique.co.za</h5>
                <h5>0712963874</h5>
            </div>
        </div>
    </div>
)
}

export default Footer