import React from 'react';
import { Box,Button,Typography,Grid } from '@material-ui/core';

const Header = () => {
    return ( 
        <Box py={10}  bgcolor = "yellow" color = "black">
            <Grid container justify="center">
                <Grid item xs={10}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h4">Open Job Listing</Typography>
                        <Button variant="contained" color="primary"> Post a job </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Header;