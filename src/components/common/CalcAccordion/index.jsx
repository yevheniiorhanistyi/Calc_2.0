import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CalcAccordionStyles } from './styles';

const CalcAccordion = () => {
  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={CalcAccordionStyles.title}>Kometarz</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <textarea style={CalcAccordionStyles.textarea}/>
        </AccordionDetails>
      </Accordion>
  );
}

export default CalcAccordion;