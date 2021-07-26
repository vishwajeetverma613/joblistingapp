import React, { useState, useEffect } from "react";

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

import { Close as ClosedIco } from "@material-ui/icons";
const skills = [
  "javascript",
  "HTML",
  "CSS",
  "React",
  "Vue",
  "Java",
  "FrontEnd",
  "BackEnd",
];


//state used to set the intitial state and use it later on
const initState = {
  title: "",
  type: "Full-Time",
  companyName: "",
  companyUrl: "",
  location: "remote",
  link: "",
  description: "",
  skills: [],
};

const NewjobmModal = (props) => {

  //state used for display of loading
  const [loading, setLoading] = useState(false);

  //state used to store job details
  const [jobDetails, setjobDetails] = useState(initState);

  //function to hande change in job details 
  const handleChange = (e) => {
    e.persist();
    //yahe pe hum old state or new state ko map krre h taki agar koi ek hi feild change toh wohi reflec hoye baki aise ke aise hi rahe
    setjobDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };


 // function used to submit the fimr and save it to th edatabse implementtion on app.js
  const handleSubmit = async () => {
    //this for loop is added so that all thee data are filled while posting  the job
    for (const feild in jobDetails) {
      if (typeof jobDetails[feild] === "string" && !jobDetails[feild]) {
        return alert('please fill all the fields correctly');
      }
    }
    if(!jobDetails.skills.length){
      return alert('please fill all the fields correctly');
    }
    
    setLoading(true);
    await props.postJob(jobDetails);
    closeModal();
  };


  //function used to make close icon openrational
  const closeModal = () => {
    setjobDetails(initState);
    setLoading(false);
    props.closeJobModal();
  };

  const useStyles = makeStyles({
    skillcard: {
      margin: "4px",
      padding: "6px",
      fontSize: "14.5px",
      transition: ".3s",
      fontWeight: 600,
      fontFamily: "Poppins, sans-serif",
      border: "1px solid #0B0B15",
      borderRadius: "15px",
      cursor: "pointer",
      color: "#0B0B15",
      "&:hover": {
        backgroundColor: "#0B0B15",
        color: "#fff",
      },
    },
    included: {
      backgroundColor: "#0B0B15",
      color: "#fff",
    },
  });

  //yaha pe hum log ye krre hai ki jb onclick p euser click krega toh agar wo skill hamare skill laye set mei present hogi toh use remove krdengr nahi toh use add kr denge
  const addRemoveSkill = (skill) => {
    jobDetails.skills.includes(skill)
      ? //remove here if block
        setjobDetails((oldstate) => ({
          ...oldstate,
          skills: oldstate.skills.filter((s) => s != skill),
        }))
      : //add here else block
        setjobDetails((oldstate) => ({
          ...oldstate,
          skills: oldstate.skills.concat(skill),
        }));
  };

  const classes = useStyles();
  return (
    <Dialog open={props.displayModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post Job
          <IconButton onClick={closeModal}>
            <ClosedIco></ClosedIco>
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              name="title"
              value={jobDetails.title}
              disableUnderline
              onChange={handleChange}
              fullWidth
              placeholder="Job Title *"
            ></FilledInput>
          </Grid>

          <Grid item xs={6}>
            <Select
              disableUnderline
              name="type"
              value={jobDetails.type}
              onChange={handleChange}
              variant="filled"
              fullWidth
            >
              <MenuItem value="full time">Full Time</MenuItem>
              <MenuItem value="part time">Part Time</MenuItem>
              <MenuItem value="internship">Internship</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              name="companyName"
              value={jobDetails.companyName}
              disableUnderline
              onChange={handleChange}
              fullWidth
              placeholder="Company Name *"
            ></FilledInput>
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              name="companyUrl"
              value={jobDetails.companyUrl}
              disableUnderline
              onChange={handleChange}
              fullWidth
              placeholder="Company URL *"
            ></FilledInput>
          </Grid>

          <Grid item xs={6}>
            <Select
              disableUnderline
              name="location"
              value={jobDetails.location}
              onChange={handleChange}
              variant="filled"
              fullWidth
            >
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="inoffice">In-office</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              name="link"
              value={jobDetails.link}
              disableUnderline
              onChange={handleChange}
              fullWidth
              placeholder="Job URL *"
            ></FilledInput>
          </Grid>

          <Grid item xs={12}>
            <FilledInput
              autoComplete="off"
              name="description"
              value={jobDetails.description}
              disableUnderline
              fullWidth
              onChange={handleChange}
              multiline
              rows={4}
              placeholder="Job Description *"
            ></FilledInput>
          </Grid>

          <Box mt={2}>
            <Typography>Skills*</Typography>
            <Box display="flex">
              {skills.map((skill) => (
                <Box
                  onClick={() => addRemoveSkill(skill)}
                  key={skill}
                  //isko use kiya hai UI ke liye
                  className={`${classes.skillcard} ${
                    jobDetails.skills.includes(skill) && classes.included
                  }`}
                >
                  {skill}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Box
          width="100%"
          color="red"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption">*required fields</Typography>
          <Button

          //handle sumission onclick
            onClick={handleSubmit}
            variant="contained"
            disabledElevation
            color="primary"
            disabled={loading}
          >
            {/* diaable the button whent the data is updating in firebase */}
            {loading ? (
              <CircularProgress color="secondary" size={22} />
            ) : (
              "PostJob"
            )}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewjobmModal;
