import React, { useEffect, useContext } from 'react';
import Header from '../../CommonComponents/Header';
import './MovieDetails.css';
import Rating from '@material-ui/lab/Rating';
import { GlobalContext } from '../../Context/GlobalState';
import NoData from '../../CommonComponents/NoData';
import RoundImagesGrid from '../../CommonComponents/RoundImagesGrid';
import { useStyles } from "./MovieDetailsStyle";
import ModalPopup from '../../CommonComponents/ModalPopup';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function MovieDetails(props) {
    const { getMovieDetails, movieDetails } = useContext(GlobalContext);
    const [imageModalOpen, setImageModalOpen] = React.useState(false);
    const [videoModalOpen, setVideoModalOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState("");

    const classes = useStyles();
    useEffect(() => {
        if (props.match.params.id) {
            getMovieDetails(props.match.params.id)
        }
    }, [])

    const handleImageClick = (imageData) => {
        setImageModalOpen(true);
        setSelectedImage(imageData);
    }

    const handleImageModalPopupClose = () => {
        setImageModalOpen(false);
    }

    const handleVideoClick = () => {
        setVideoModalOpen(true)
    }

    const handleVideoModalPopupClose = () => {
        setVideoModalOpen(false)
    }

    if (Object.keys(movieDetails).length === 0) {
        return <NoData />
    }
    return (
        <>
            <Header back={true} history={props.history} />
            <div className="App">
                <div className="container">
                    <div className="scroller">
                        <img src={movieDetails.image} alt="movie-poster" className={classes.imageBanner} />
                    </div>
                </div>
                <div className="title-container">
                    <h1>{movieDetails.title}</h1>
                    <div className="subtitle-container">{movieDetails.genres} | {movieDetails.release} (India)</div>
                    <Rating name="half-rating-read" value={movieDetails.rating} precision={0.5} readOnly />
                    <div className="content-container">
                        <div className="title-tag">Description: </div>
                        <div>{movieDetails.description}</div>
                    </div>
                </div>
                <div className="img-container">
                    <div className="title-tag">Star Cast:</div>
                    <div className={classes.root}>
                        {
                            movieDetails.cast.map((cast, index) =>
                                <RoundImagesGrid cast={cast} key={index} />
                            )
                        }
                    </div>
                </div>
                <div className="img-container">
                    <div className="title-tag">Images:</div>
                    <div className={classes.root}>
                        {
                            movieDetails.media.map((image, index) =>
                                <img alt={"media"} key={index} src={image.src} className="img-style" onClick={() => handleImageClick(image.src)} />
                            )
                        }
                    </div>
                </div>
                <div className="img-container">
                    <div className="title-tag">Trailer:</div>
                    <div className={classes.root}>
                        <div className="video-container">
                            <PlayCircleOutlineIcon style={{ color: "#fff", height: 50, width: 50 }} onClick={() => handleVideoClick()} />
                        </div>
                        <img src={movieDetails.trailer.image} alt="trailer-poster" className="img-style" >
                        </img>
                    </div>
                </div>
                {
                    imageModalOpen &&
                    <ModalPopup open={imageModalOpen} src={selectedImage} handleClose={handleImageModalPopupClose} />
                }
                {
                    videoModalOpen &&
                    <ModalPopup open={videoModalOpen} videoUrl={movieDetails.trailer.video} handleClose={handleVideoModalPopupClose} />
                }
            </div>
        </>
    )
}
