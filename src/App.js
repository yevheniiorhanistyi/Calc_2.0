import Grid from '@mui/material/Grid';

import Portins from './pages/Portions'
import Header from './components/Header/Header';

function App() {
  const title = "Kalkulator porcji";

  return (
    <Grid container>
      <Header title={title} />
      <Portins />
    </Grid>
  );
}

export default App;
