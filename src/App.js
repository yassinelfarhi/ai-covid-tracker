
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Network  from './components/Network';
import  Cartography  from './components/Cartography';
import { Analytics } from './components/Analytics';
import  { Container } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import './App.css';
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    
   
    <Container maxWidth="lg">
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            AI COVID TRACKER
          </Typography>
        </Toolbar>
      </AppBar>
    
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
       
        <List>
        
          {['Simulations', 'Cartographies', 'Analytics'].map((text, index) => (
            <Link key={index} to={text}>
            <ListItem button>
              <ListItemIcon>{
                    index === 0 ? <Icon className="fas fa-cubes" style={{ fontSize: 30 }} />
                    : index === 1 ? <Icon className="fas fa-map" style={{ fontSize: 30 }} />
                    : <Icon className="far fa-chart-bar" style={{ fontSize: 30 }} />            
                                 }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
         
        </List>
        <Divider />
        <List>
          {['Settings', 'Logout'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{ index === 0 ? <Icon className="fas fa-cog" style={{ fontSize: 30 }} /> : <Icon className="fas fa-sign-out-alt" style={{ fontSize: 30 }} />  }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
      <div className={classes.toolbar} />
     
     
      <Switch>
          <Route exact path="/simulations">
     
            <Network />
    
          </Route>
          <Route exact path="/cartographies">
          
          <Cartography />
       
          </Route>
          <Route exact path="/analytics">
         
            <Analytics />
         
          </Route>
          <Route exact path="/">
    <Redirect to="/simulations" />
</Route>
        </Switch>
      
      </main>
    </div>
    </Container>
    
  );
}

export default App;
