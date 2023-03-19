export const CalcAccordionStyles = {
    title: {
        fontSize: 16, 
        fontWeight: 500,
    },
    textarea: {
        fontFamily: 'inherit',
        color: 'rgba(0, 0, 0, 0.87)',
        width: '100%', 
        minHeight: '111px', 
        maxHeight: '111px',
        padding: '16px',
        border: '1px solid #cccccc',
        backgroundColor: '#feffce',
        boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',
        '&:focus-visible': {
            outline: 0,
            boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)'
        }
        
    }
};