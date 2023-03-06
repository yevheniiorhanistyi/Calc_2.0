import { useState } from 'react';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import MenuItem from '@mui/material/MenuItem';
import { TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import BasicSlider from '../../components/common/BasicSlider';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { cardHeaderStyles } from './styles';

const CalcCard = () => {
    const [grammature, setGrammature] = useState(400);
    const marks = [{value: 270,},{value: 300,},{value: 340,},{value: 380,},{ value: 410,},{value: 450,},];

    const getHeader = () => {

        const handleChange = (event) => {
            setGrammature(event.target.value);
          };

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <Box sx={cardHeaderStyles.textFieldGroupe}>
                    <TextField
                        sx={cardHeaderStyles.textField}
                        name='receptura'
                        label='Receptura'
                        type="number"
                        size='small'
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment sx={cardHeaderStyles.inputAdornment} position="start">%</InputAdornment>,
                          }}
                    />
                    <TextField
                        sx={cardHeaderStyles.textField}
                        name='material'
                        label='Ilość surowca'
                        type="number"
                        size='small'
                        variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment sx={cardHeaderStyles.inputAdornment} position="start">kg</InputAdornment>,
                          }}
                    />
                    <TextField
                        sx={cardHeaderStyles.textFieldSelect}
                        value={grammature}
                        size='small'
                        select
                        label="Grammatura"
                        onChange={handleChange}
                        >
                        <MenuItem value={400}>400</MenuItem>
                        <MenuItem value={700}>700</MenuItem>
                        <MenuItem value={800}>800</MenuItem>
                        <MenuItem value={900}>900</MenuItem>
                    </TextField>
                    <BasicSlider min={270} max={450} step={10} defaultValue={410} marks={marks}/>
                </Box>
                <Box>
                    <CommonButton 
                        variant="contained"
                        size="medium"
                        sx={cardHeaderStyles.addUserButton}
                    >
                        Oblicz
                    </CommonButton>
                    <IconButton sx={{backgroundColor: 'rgba(25, 118, 210, 0.04)'}}>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
        
    }

    const getContent = () => (
        <Typography 
            align="center"
            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
        >
                    No portions for this project yet
        </Typography>
    );

    return(
        <BasicCard
                header={getHeader()}
                content={getContent()}
        />
    )
}

export default CalcCard;