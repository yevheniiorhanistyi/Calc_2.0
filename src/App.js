import Grid from '@mui/material/Grid';

import Main from './pages/Main'
import Header from './components/Header/Header';

function App() {
  const title = "Kalkulator porcji";

  return (
    <Grid container>
      <Header title={title} />
      <Main />
    </Grid>
  );
}

export default App;
