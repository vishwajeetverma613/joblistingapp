import React from "react";

import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  Button,
  IconButton,
} from "@material-ui/core";

import {Close as ClosedIco} from "@material-ui/icons";
const skills=["javascript", "HTML", "CSS", "React","Vue","Java","FrontEnd","BackEnd"]

const NewjobmModal = () => {

    const useStyles=makeStyles({
        skillcard:{
            margin:"4px",
            padding:"6px",
            fontSize:"14.5px",
            transition:".3s",
            fontWeight:600,
            fontFamily: "Poppins, sans-serif",
            border:"1px solid #0B0B15",
            borderRadius:"15px",
            cursor:"pointer",
            color:"#0B0B15",
            "&:hover":{
                backgroundColor:"#0B0B15",
                color:"#fff",
            }
      
          },
    });
    const classes=useStyles();
  return (
    <Dialog open={false} fullWidth>
      <DialogTitle>
          <Box display="flex"  justifyContent="space-between" alignItems="center">
              Post Job
              <IconButton>
              <ClosedIco></ClosedIco>
              </IconButton>
          </Box>

      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              disableUnderline
              fullWidth
              placeholder="Job Title *"
            ></FilledInput>
          </Grid>

          <Grid item xs={6}>
          <Select disableUnderline variant="filled" defaultValue="Full Time" fullWidth>
              <MenuItem value="full time">Full Time</MenuItem>
              <MenuItem value="part time">Part Time</MenuItem>
              <MenuItem value="internship">Internship</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              disableUnderline
              fullWidth
              placeholder="Company Name *"
            ></FilledInput>
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              disableUnderline
              fullWidth
              placeholder="Company URL *"
            ></FilledInput>
          </Grid>

          <Grid item xs={6}>
            <Select disableUnderline variant="filled" defaultValue="remote" fullWidth>
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="inoffice">In-office</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              disableUnderline
              fullWidth
              placeholder="Job URL *"
            ></FilledInput>
          </Grid>

          <Grid item xs={12}>
            <FilledInput
              disableUnderline
              fullWidth
              multiline
              rows={4}
              placeholder="Job Description *"
            ></FilledInput>
          </Grid>

          <Box mt={2}>
              <Typography>Skills</Typography>
              <Box display="flex">
                  {skills.map(skill => <Box key={skill} className={classes.skillcard}>{skill}</Box>)}
              </Box>
          </Box>

        </Grid>
      </DialogContent>
      <DialogActions>
          <Box width="100%"  color="red" display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="caption" >*required fields</Typography>
              <Button variant = "contained" disabledElevation>Post job</Button>
          </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewjobmModal;
