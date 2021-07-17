import React from 'react';

import {Box,Button,Select,MenuItem,makeStyles} from "@material-ui/core";


const Search = () => {

    const  useStyles = makeStyles({
        wrapper : {
            backgroundColor : "#fff",
            display:"flex",
            boxShadow: "0px 1px 5px rgba(0,0,0,0,0.1)",
            borderRadius:  "5px",
            "& > *" :{
                flex:1,
                height:"45px",
                margin:"8px",
            },
        },
    })

    const classes = useStyles();

    return ( 
        <Box p={2} className={classes.wrapper}>
            <Select disableUnderline variant="filled" defaultValue = "Full Time">
                <MenuItem value = "full time">Full Time</MenuItem>
                <MenuItem value = "part time">Part Time</MenuItem>
                <MenuItem value = "internship">Internship</MenuItem>
            </Select>

            <Select disableUnderline variant="filled" defaultValue = "India">
                <MenuItem value = "banglore">Banglore</MenuItem>
                <MenuItem value = "delhi">Delhi</MenuItem>
                <MenuItem value = "gurugram">Gurugram</MenuItem>
            </Select>

            <Select disableUnderline variant="filled" defaultValue = "remote">
                <MenuItem value = "remote">Remote</MenuItem>
                <MenuItem value = "inoffice">In-office</MenuItem>
            </Select>
            
            <Button variant="contained" color="primary">Search</Button>

        </Box>

     );
}
 
export default Search;