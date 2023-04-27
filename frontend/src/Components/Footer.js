import React from 'react'
import '../CSS/Footer.css'

class Footer extends React.Component {
    // state = {  } 
    render() { 
        return (
            <footer className='foot'>
                <div className="name">
                    HUNGRY BOX
                </div>
                <div className="address">
                    Address: Adjacent to Annapurna,Ground Floor, JIIT, Sector-128
                </div>
                <div className="contact">
                    Contact at: (+91) - 171829990
                </div>
                <div className="icons">
                    Follow us on:
                    <div class="icon">
            <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter fa-1.5x"></i></a>
            <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram fa-1.5x"></i></a>
        </div>
                </div>
            </footer>
        );
    }
}

export default Footer;