import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const BasicCard = ({header, content}) => {
    return(
        <Card sx={{marginBottom: '20px'}}>
            {header}
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
};

export default BasicCard;