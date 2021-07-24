import React from 'react';
import { Box,Button,Typography,Grid } from '@material-ui/core';
import { PinDropSharp } from '@material-ui/icons';

const Header = (props) => {
    return ( 
        <Box py={10}  bgcolor = "#4D64E4" color = "white">
            <Grid container justify="center">
                <Grid item xs={10}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h4">Open Jobs</Typography>
                        
  {/* //function used to make post a job icon openrational */}
                        <Button onClick={props.openJobModal } variant="contained" color="primary"> Post a job </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Header;