import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../logo.svg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useStyles from './HeaderStyle';

function Header(props) {
    const classes = useStyles();

    const handleBackPress = () => {
        props.history.push('/')
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {
                        props.back ?
                            <ArrowBackIcon
                                style={{ height: 30, width: 60 }}
                                onClick={handleBackPress}
                                id="back-icon"
                            />
                            :
                            <img src={logo} style={{ height: 60, width: 60 }} alt="logo" />
                    }
                    <Typography className={classes.title} variant="h6" noWrap id="title-text">
                        MOVIE-APP
                    </Typography>
                    {
                        props.search ?
                            <div className={classes.search} id="search-container">
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder={props.placeholder}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={props.handleSearchTextChange}
                                    value={props.searchValue}
                                />
                            </div>
                            : null
                    }

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;

