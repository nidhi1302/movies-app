import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import useStyles from './ImagesGridStyle';

function ImagesGrid(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList cellHeight={200} className={classes.gridList} cols={3}>
                {props.data.map((item, index) => (
                    <GridListTile key={index} onClick={() => props.handleCardClick(item.id)} className={classes.gridTile}>
                        <img src={item.image} alt={item.title} style={{ height: "100%", width: "100%" }} />
                        <GridListTileBar
                            title={item.title}
                            subtitle={<span>Release Date: {item.release}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default ImagesGrid;
