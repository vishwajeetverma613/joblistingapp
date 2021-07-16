import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";

const skills = ["javascript", "HTML", "CSS", "React"];

const Jobcard = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs>
          <Typography variant="subtitle1">Frontend Developer</Typography>
          <Typography variant="subtitle2">Chegg</Typography>
        </Grid>
        <Grid item xs>
          <Grid container>
            {skills.map(skill => 
                <Grid key={skill} item>{skill}</Grid>
            
            )}
          </Grid>
        </Grid>
        <Grid item container direction="column" align-items="flex-end" xs>
            <Grid item>
              <Typography variant="caption">
                13h ago | Full-time | Noida
              </Typography>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Button variant="outlined">Check</Button>
              </Box>
            </Grid>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Jobcard;
