import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        padding: 10
    },
    gridList: {
        width: 1500,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    image: {
    },
    gridTile: {
        cursor: "pointer"
    }
}));

export default useStyles;