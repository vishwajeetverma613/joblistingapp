import React from "react";
import { Box, Button, Grid, Typography,makeStyles } from "@material-ui/core";

import {differenceInHours} from "date-fns";

const skills = ["javascript", "HTML", "CSS", "React"];

const Jobcard = (props) => {
  const useStyles = makeStyles({
    wrapper:{
      border:"1px solid #e8e8e8",
      cursor:"pointer",
      transition:".3s",

      "&:hover" :{
        boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.1)",
        borderLeft: "6px solid #4D64E4",
      },

    },
    companyName:{
      fontSize:"13.5px",
      backgroundColor:"#18E1D9",
      padding:"6px",
      borderRadius:"5px",
      display:"inline-block",
      fontWeight:600,
    },
    skillcard:{
      margin:"4px",
      padding:"6px",
      fontSize:"14.5px",
      borderRadius:"15px",
      cursor:"pointer",
      transition:".3s",
      fontWeight:600,
      fontFamily: "Poppins, sans-serif",
      backgroundColor:"#0B0B15",
      color:"#fff",

    },
  });

  const classes =  useStyles();


  return (
    <Box p={2} mt={1} className={classes.wrapper}>
      <Grid container alignItems="center" >
        <Grid item xs >
          <Typography variant="subtitle1">{props.title}</Typography>
          <Typography className={classes.companyName} variant="subtitle1">{props.companyName}</Typography>
        </Grid>
        <Grid item xs >
          <Grid container>
            {props.skills.map(skill => 
                <Grid className={classes.skillcard} key={skill} item>{skill}</Grid>
            
            )}
          </Grid>
        </Grid>
        <Grid item container alignItems="flex-end" direction="column" xs>
            <Grid item>
              <Typography variant="caption">
                {differenceInHours(Date.now(),props.postedOn)} hr ago | {props.type} | {props.location}
              </Typography>
            </Grid>
            <Grid item>
              <Box mt={2} borderRadius = "15px">
                <Button variant="outlined">Check</Button>
              </Box>
            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Jobcard;
