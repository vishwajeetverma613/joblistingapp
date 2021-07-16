import { Box, Grid } from "@material-ui/core";
import Header from "./Components/Header";
import Jobcard from "./Components/Jobcard";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Grid container justify="center">
        <Grid item xs={10}>
          <Header></Header>
          <Search></Search>
          <Jobcard></Jobcard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
