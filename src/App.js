import React, { useState, useEffect } from "react";
import { Box, Grid, CircularProgress } from "@material-ui/core";
import Header from "./Components/Header";
import Jobcard from "./Components/Jobcard";
import NewjobmModal from "./Components/NewjobModal";
import Search from "./Components/Search";
import { firestore,app } from "./firebase/config";
// import jobdata from "./dummyData.js";

function App() {
  const [jobdata, setJobs] = useState([]);

  
  const [displayModal ,setdisplayModal] = useState(false);

  //initialize loading
  const [loading, setLoading] = useState(true);

  // fetching jobs from firestore databse
  const fetchJobs = async () => {
    setLoading(true);
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .get();
    console.log(req);
    const tempJobs = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    setJobs(tempJobs);

    //for loading puposese
    setLoading(false);
  };


  //function for posting a job

  const postJob = async jobDetails => {
    await firestore.collection("jobs").add(
      {
        ...jobDetails,
        postedOn: app.firestore.FieldValue.serverTimestamp(),
      }
      ).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    fetchJobs();
    
  };



  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="App">
      <Box alignContent="center">
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <Header openJobModal = {()=> setdisplayModal(true)}></Header>
            <Search></Search>
          {/* loading componenetwe have use here using maaterail UI */}
            {loading ? (
              <Box diaplay="flex" justifyContent="center"><CircularProgress/></Box>
            ) : (
              jobdata.map((job) => <Jobcard key={job.id} {...job}></Jobcard>)
            )}
            <NewjobmModal closeJobModal = {()=> setdisplayModal(true)} postJob={postJob} diaplayModal = {displayModal}></NewjobmModal>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
