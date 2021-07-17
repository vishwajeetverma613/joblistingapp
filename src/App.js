import { Box, Grid } from "@material-ui/core";
import Header from "./Components/Header";
import Jobcard from "./Components/Jobcard";
import NewjobmModal from "./Components/NewjobModal";
import Search from "./Components/Search";

import jobdata from "./dummyData.js";

function App() {
  return (
    <div className="App">
      <Box alignContent="center">
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <Header></Header>
            <Search></Search>
            <NewjobmModal></NewjobmModal>
            {jobdata.map(job => <Jobcard key={job.id} {...job}></Jobcard>)}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
