import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import AddIcon from '@mui/icons-material/Add';
import CalcCard from '../../components/CalcCard';
import Fab from '@mui/material/Fab';

const Main = () => {
    

    return (
        <GridWrapper>
            <CalcCard/>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </GridWrapper>
    )
};

export default Main;