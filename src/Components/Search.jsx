import React, { useState } from 'react';

import {Box,Button,Select,MenuItem,makeStyles,CircularProgress} from "@material-ui/core";


const Search = (props) => {

    const [loading,setLoading] = useState(false);

    //search bar state
    const [jobsearchDetails,setJobSearchDetails] = useState({
        type:"Full Time",
        location:"India",
        jobType:"remote",
    });

    const handleChange = (e) => {
        e.persist();
        //yahe pe hum old state or new state ko map krre h taki agar koi ek hi feild change toh wohi reflec hoye baki aise ke aise hi rahe
        setJobSearchDetails((oldState) => ({
          ...oldState,
          [e.target.name]: e.target.value,
        }));
      };
    

      const handleSearch = () =>{
          setLoading(true);
          await props.searchJobs(jobsearchDetails);
          setLoading(false);
      }

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
            <Select disableUnderline name = "type" variant="filled" value={jobsearchDetails.type} onChange={handleChange}>
                <MenuItem value = "full time">Full Time</MenuItem>
                <MenuItem value = "part time">Part Time</MenuItem>
                <MenuItem value = "internship">Internship</MenuItem>
            </Select>

            <Select disableUnderline variant="filled" name ="location" value={jobsearchDetails.location} onChange={handleChange}>
                <MenuItem value = "banglore">Banglore</MenuItem>
                <MenuItem value = "delhi">Delhi</MenuItem>
                <MenuItem value = "gurugram">Gurugram</MenuItem>
            </Select>

            <Select disableUnderline variant="filled" name="jobType" value={jobsearchDetails.jobType} onChange={handleChange}>
                <MenuItem value = "remote">Remote</MenuItem>
                <MenuItem value = "inoffice">In-office</MenuItem>
            </Select>


            <Button

          //handle sumission onclick
            onClick={handleSearch}
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {/* diaable the button whent the data is updating in firebase */}
            {loading ? (
              <CircularProgress color="secondary" size={22} />
            ) : (
              "Search"
            )}
          </Button>
            
           

        </Box>

     );
}
 
export default Search;