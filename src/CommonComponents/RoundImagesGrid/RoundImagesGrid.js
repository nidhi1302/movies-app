import React from 'react'
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./RoundImagesGrid.css";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        maxWidth: "100%",
        maxHeight: "100%"
    }
}));
export default function RoundImagesGrid(props) {
    const classes = useStyles();
    return (
        <div className="img-display-container">
            <Avatar alt={props.cast.name} src={props.cast.src} className={classes.large} />
            <div className="name-diplay">{props.cast.name}</div>
        </div>
    )
}
