import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from "@mui/material/styles";
import { CalcAccordionStyles } from './styles';

const TextAreaStyle = styled("textarea")(({ theme }) => ({
  border: `2px solid #F9FAFB`,
  width: "100%",
  flexGrow: 1,
  boxSizing: "border-box",
  borderRadius: 3,
  backgroundColor: "#f8f8f8",
  // font-size: 16px;
  resize: "none",
  "&:focus-visible": {
    outline: 0,
    boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)'
  },
  "&:hover": {
    border: `2px solid #F4F6F8`
  }
}));

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
            <TextAreaStyle/>
        </AccordionDetails>
      </Accordion>
      
  );
}

export default CalcAccordion;