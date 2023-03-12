import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../common/BasicMenu/BasicMenu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const notifications = [
    {
        id: 0,
        label: '1. - 320 kg'
    },
    {
        id: 1,
        label: '2. - 320 kg'
    },
  ];

const GeneratedPortions = () => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (event) => {
        setOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
      };


    return(
        <div>
            <List
                component="nav"
                aria-label="Device settings"
                sx={{ bgcolor: 'background.paper' }}
            >
            <ListItem
                button
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpen}
            >
                <ListItemText
                    sx={{textAlign: 'end'}}
                    primary={`${2} szt`}
                    
                />
            </ListItem>
            </List>
            <BasicMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                open={open}
                menuItems={notifications}
            />
        </div>
    )
}

export default GeneratedPortions;