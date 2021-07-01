import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


export default function NetworkOptions({sendOptions,options}) {
  const classes = useStyles();
  // const [ro, setRo] = useState(0.2);
  // const [incubation, setIncubation] = useState(0.5);
  // const [fiability, setFiability] = useState(0.5);
  // const [population, setPopulation] = useState(0.5);
  // const [density, setDensity] = useState(0.5);
  // const [mouvement, setMouvement] = useState(0.5);
  // const [voyage, setVoyage] = useState(0.5);
  // const [confinement, setConfinement] = useState(0.5);
  // const [travail, setTravail] = useState(0.5);
  // const [barrieres, setBarrieres] = useState(0.5);
  // const [tests, setTests] = useState(0.5);
  // const [soins, setSoins] = useState(0.5);

  // formules
  const firstState = ((options.voyage + options.confinement + options.travail) / 3 ) * options.density * options.mouvement * (1 - options.tests);
  const secondState = options.incubation * options.tests;
  const thirdState = options.fiability * options.soins;
 
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Epedimic Properties
          </Typography>
          <Typography variant="h6" gutterBottom>RO</Typography>
          
          <PrettoSlider
             value={options.ro}
            //  onChange={ ( event, newValue ) =>  { setRo( newValue ) }  }
            onChange={sendOptions}
             name="ro"
             min={0}
             step={0.1}
             max={1}
            valueLabelDisplay="auto"
            aria-label="ro"
          />
          <div className={classes.margin} />
          <Typography variant="h6" gutterBottom>INCUBATION</Typography>
          <PrettoSlider
              value={options.incubation}
              // onChange={ ( event, newValue ) => { setIncubation( newValue ) } }
              onChange={sendOptions}
              name="incubation"
              min={0}
              step={0.1}
              max={1}
            valueLabelDisplay="auto"
            aria-label="incubation"
          />
          <div className={classes.margin} />
          <Typography variant="h6" gutterBottom>Fiablity</Typography>
          <PrettoSlider
            value={options.fiability}
            // onChange={ (event, newValue) =>  { setFiability(newValue) } }
            onChange={sendOptions}
            name="fiability"
            min={0}
            step={0.1}
            max={1}
            valueLabelDisplay="auto"
            aria-label="fiability"
            
          />
          <div className={classes.margin} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Demographic Properties
          </Typography>
          <Typography variant="h6" gutterBottom>Population</Typography>
          <PrettoSlider
              value={options.population}
              // onChange={ ( event, newValue ) => { setPopulation(newValue) }}
              onChange={sendOptions}
              name="population"
              min={0}
              step={0.1}
              max={1}
            valueLabelDisplay="auto"
            aria-label="population"
      
          />
          <div className={classes.margin} />
          <Typography variant="h6" gutterBottom>Density</Typography>
          <PrettoSlider
              value={options.density}
              // onChange={ ( event, newValue ) => { setDensity(newValue) }}
              onChange={sendOptions}
              name="density"
              min={0}
              step={0.1}
              max={1}
            valueLabelDisplay="auto"
            aria-label="density"
            
          />
          <div className={classes.margin} />
          <Typography variant="h6" gutterBottom>Mouvement</Typography>
          <PrettoSlider
              value={options.mouvement}
              // onChange={ (event, newValue) => { setMouvement(newValue) }}
              onChange={sendOptions}
              name="mouvement"
              min={0}
              step={0.1}
              max={1}
            valueLabelDisplay="auto"
            aria-label="mouvement"
            
          />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Actions to take 
          </Typography>
          <Typography variant="h6" gutterBottom>Restriction de voyage</Typography>
          <PrettoSlider
              value={options.voyage}
              // onChange={ (event, newValue) => { setVoyage(newValue) }}
              onChange={sendOptions}
              name="voyage"
              min={0}
              step={0.1}
              max={1}
            valueLabelDisplay="auto"
            aria-label="voyage"
           
          />
          <div className={classes.margin} />
          <Typography variant="h6" gutterBottom>Confinement</Typography>
          <PrettoSlider
              value={options.confinement}
              // onChange={ (event, newValue) => { setConfinement(newValue) } }
              onChange={sendOptions}
              name="confinement"
              min={0}
              step={0.1}
              max={1}
            valueLabelDisplay="auto"
            aria-label="confinement"
          />
          <div className={classes.margin} />
          <Typography variant="h6" gutterBottom>Travail et étude à distance</Typography>
          <PrettoSlider
              value={options.travail}
              // onChange={ (event, newValue) => {setTravail(newValue)} }
              onChange={sendOptions}
              name="travail"
              min={0}
              step={0.1}
              max={1}
            valueLabelDisplay="auto"
            aria-label="travail"
          />
               <div className={classes.margin} />
          <Typography variant="h6" gutterBottom>Utiliser des barrières</Typography>
          <PrettoSlider
             value={options.barrieres}
            //  onChange={ (event, newValue) => { setBarrieres(newValue) } }
            onChange={sendOptions}
             name="barrieres"
              min={0}
              step={0.1}
              max={1}
            valueLabelDisplay="auto"
            aria-label="barrieres"      
          />
               <div className={classes.margin} />
          <Typography variant="h6" gutterBottom>Augmenter le taux de test</Typography>
          <PrettoSlider
              value={options.tests}
              // onChange={ (event, newValue) => { setTests(newValue) }}
              onChange={sendOptions}
              name="tests"
              min={0}
              step={0.1}
              max={1}
              valueLabelDisplay="auto"
              aria-label="tests"
          />
                      <div className={classes.margin} />
          <Typography variant="h6" gutterBottom>Augmenter la capacité de soins de santé</Typography>
          <PrettoSlider
             value={options.soins}
            //  onChange={ (event, newValue) => { setSoins(newValue) } }
             onChange={sendOptions}
             name="soins"
              min={0}
              step={0.1}
              max={1}
            valueLabelDisplay="auto"
            aria-label="soins"      
          />
        </Paper>
        
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Simulation Period"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => { }}
              className={classes.button}
              endIcon={
                <Icon className="far fa-play-circle" style={{ fontSize: 30 }} />
              }
            >
              Launch
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

