import { Box, Grid } from "@material-ui/core";
import Header from "./Components/Header";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Grid container justify="center">
        <Grid item xs={10}>
          <Header></Header>
          <Search></Search>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
