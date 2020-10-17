import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './TabsViewStyle';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabsView(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={props.value}
                    onChange={props.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {
                        props.categories.map((category, index) =>
                            <Tab key={index} label={category} {...a11yProps(index)} />
                        )
                    }
                </Tabs>
            </AppBar>
        </div>
    );
}