import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import GridWrapper from './components/common/GridWrapper/GridWrapper';
import Header from './components/Header/Header';
import CalcCard from './components/CalcCard';

function App() {
  const title = "Kalkulator porcji";

  return (
    <Grid container>
      <Header title={title} />
      <GridWrapper>
          <CalcCard/>
          <Fab color="primary" aria-label="add">
              <AddIcon />
          </Fab>
      </GridWrapper>
    </Grid>
  );
}

export default App;
