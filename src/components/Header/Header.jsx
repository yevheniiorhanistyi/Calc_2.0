import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import MailIcon from '@mui/icons-material/Mail';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';

const Header = ({ title }) => {
    const headerStyles = {
        wrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#009be5',
            padding: '20px 80px',
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '20px',
            '*': {
                marginRight: '5px',
            },
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        link: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            "&:hover": {
                color: '#fff',
                cursor: 'pointer',
            },
        },
        webButton: {
            marginRight: '5px',
        },
    };

    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    sx={headerStyles.title}
                    variant="h1"
                    color="white"
                >
                    {title}
                </Typography>
                <Box>
                    <Tooltip
                        title="Send"
                    >
                        <IconButton
                            color="white"
                        >
                            <MailIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        title="Help"
                    >
                        <IconButton
                            color="white"
                        >
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default Header;