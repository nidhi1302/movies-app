import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        width: "100%",
        overflowX: "auto"
    },
    imageBanner: {
        height: "45vh",
        width: "100%",
        borderRadius: 10,
        maxHeight: "100%",
        maxWidth: "100%",
    }
}));