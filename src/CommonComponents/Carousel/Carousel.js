import React from 'react';
import './Carousel.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default function Carousel(props) {
    return (
        <div className="App">
            <div className="container">
                <div className="scroller">
                    <div className="left-icon-div" onClick={props.handleLeftClick}>
                        <KeyboardArrowLeftIcon style={style.iconStyle} />
                    </div>
                    <div className="right-icon-div" onClick={props.handleRightClick}>
                        <KeyboardArrowRightIcon style={style.iconStyle} />
                    </div>
                    <img src={props.source} alt="nature" style={style.imageStyle}></img>
                    <div className="dot-container">
                        {
                            props.images.map((image, index) =>
                                <span className="dot-style" key={index} style={{ backgroundColor: (props.activeImage === index) ? '#2E3B55' : '#fff' }} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const style = {
    iconStyle: {
        color: "white",
        height: 40,
        width: 40
    },
    imageStyle: {
        height: "45vh",
        width: "100%",
        borderRadius: 10,
        maxHeight: "100%",
        maxWidth: "100%"
    }
}
