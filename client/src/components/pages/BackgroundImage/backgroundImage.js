import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";
import FixedBackgroundImage from '../../assets/images/background image resize 50.jpg';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function BackgroundImage() {
    return (
        <div className='backgroundImageSection'>
            <img src={FixedBackgroundImage} alt="fixedBackground" className="fixedBackgroundImage" />
        </div>
    );
}

export default BackgroundImage;
