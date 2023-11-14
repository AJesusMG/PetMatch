import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'rtl' ? (
              <img src="/img/Logo_PNG.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
            ) : (
              <img src="/img/Logo_PNG.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
            )}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
            onClick={handleDrawerToggle}
          >
            PetMatch
          </Typography>
        </DrawerHeader>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Catalogue") }}>
            <ListItemButton className='listItemButton'
              sx={{
                minHeight: 68,
                Width: '18px',
                justifyContent: open ? 'initial' : 'center',
                transition: 'transform 0.2s',
                '&:hover': {
                  background: 'rgba(254, 174, 33, 1)',
                  borderRadius: '10%',
                },
                px: 2.5,
                cursor: open ? 'pointer' : 'default',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.4)',
                    color: 'white',
                  },
                }}
              >
                <AutoStoriesIcon />
              </ListItemIcon>
              <ListItemText
                primary={<span style={{ fontWeight: 'bold' }}>Catalogo</span>}
                sx={{
                  opacity: open ? 1 : 0,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    color: 'white',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Comments") }}>
            <ListItemButton
              sx={{
                minHeight: 68,
                Width: '18px',
                justifyContent: open ? 'initial' : 'center',
                transition: 'transform 0.2s',
                '&:hover': {
                  background: 'rgba(254, 174, 33, 1)',
                  borderRadius: '10%',
                },
                px: 2.5,
                cursor: open ? 'pointer' : 'default',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.4)',
                    color: 'white',
                  },
                }}
              >
                <PeopleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary={<span style={{ fontWeight: 'bold' }}>Comunidad</span>}
                sx={{
                  opacity: open ? 1 : 0,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    color: 'white',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 68,
                Width: '18px',
                justifyContent: open ? 'initial' : 'center',
                transition: 'transform 0.2s',
                '&:hover': {
                  background: 'rgba(254, 174, 33, 1)',
                  borderRadius: '10%',
                },
                px: 2.5,
                cursor: open ? 'pointer' : 'default',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.4)',
                    color: 'white',
                  },
                }}
              >
                <AddIcon />
              </ListItemIcon>
              <ListItemText
                primary={<span style={{ fontWeight: 'bold' }}>Añadir</span>}
                sx={{
                  opacity: open ? 1 : 0,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    color: 'white',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}