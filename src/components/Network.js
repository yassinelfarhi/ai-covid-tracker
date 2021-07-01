import React, { useState } from "react";
import * as d3 from "d3";
// import { nodes, links } from "../data/data.js";
import NetworkOptions from "./NetworkOptions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ResultsTable from "./NetworkResults.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));



export default function Network(props) {
  const classes = useStyles();
  const initial = {
                    ro: 0.5,
                    incubation: 0.5,
                    fiability: 0.5,
                    population: 0.5,
                    density: 0.5,
                    mouvement: 0.5,
                    voyage: 0.5,
                    confinement: 0.5,
                    travail: 0.5,
                    barrieres: 0.5,
                    tests: 0.5,
                    soins: 0.5
                   };

  const [options, setOptions] = useState(initial);
  const states = {
    firstState: ((options.voyage + options.confinement + options.travail) / 3 ) * options.density * options.mouvement * (1 - options.tests),
    secondState: options.incubation * options.tests,
    thirdState: options.fiability * options.soins
  }
  
  const changeOptions = (event,newValue) => {
    console.log(event);
    console.log(options);
    setOptions({...options,[event.target.ariaLabel]:newValue});

   console.log(simulation);
   let NewStates = d3.select('main svg').selectAll('text.allstates').data(nodes);

 

   NewStates.remove();
   
   NewStates.enter()
   .append('text')
  .text((node) => node.nodeState)
  .attr('fill', 'red')
   .attr('class', 'allstates')
  .attr('x', (node) => node.cx)
 .attr('y', (node) => node.cy + 50);

 simulation.restart();

  }

  //Formules
 

  const start = 50;
  const nodes = [
    { name: 'I', cx: start, cy: start,nodeState: states.firstState.toFixed(2) },
    { name: 'U', cx: start + 150, cy: start,nodeState: states.secondState.toFixed(2) },
    { name: 'N', cx: start, cy: start + 150, nodeState: states.thirdState.toFixed(2) },
    { name: "I'", cx: 175, cy: start + 150,nodeState: 0 },
    { name: 'K', cx: start + 200, cy: start + 225, nodeState: 0 },
    { name: 'R', cx: start + 300, cy: start + 150, nodeState: 0 },
    { name: "K'", cx: start + 300, cy: start + 275, nodeState: 0 },
  ];
  
  const links = [
    { source: 0, target: 1 },
    { source: 1, target: 3 },
    { source: 0, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
  ];
  
  const width = 400;
  const height = 400;
  
  const centerX = width / 2;
  const centerY = height / 2;
  
   let simulation = d3
    .forceSimulation(nodes)
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(0, 0))
    .force('link', d3.forceLink(links))
    .on('tick', ticked);
  
   function ticked() {
    let circles = d3
      .select('main svg')
      .selectAll('circle')
      .data(nodes);
  
    let lines = d3
      .select('main svg')
      .selectAll('line')
      .data(links);
  
    let text = d3.select('main svg').selectAll('text').data(nodes);
   
    let allstates = d3.select('main svg').selectAll('text').data(nodes);
    lines
      .enter()
      .append('line')
      .attr('stroke', 'black')
      .merge(lines)
      .attr('x1', (line) => line.source.cx)
      .attr('y1', (line) => line.source.cy)
      .attr('x2', (line) => line.target.cx)
      .attr('y2', (line) => line.target.cy);
  
    circles
      .enter()
      .append('circle')
      .attr('r', 20)
      .attr('fill', '#3f51b5')
      .merge(circles)
      .attr('cx', (node) => {
        return node.cx;
      })
      .attr('cy', (node) => {
        return node.cy;
      });
  
    text
      .enter()
      .append('text')
      .text((node) => node.name)
      .attr('fill', 'white')
      .merge(text)
      .attr('x', (node) => node.cx)
      .attr('y', (node) => node.cy);
  
  allstates
      .enter()
      .append('text')
     .text((node) => node.nodeState)
     .attr('fill', 'red')
      .attr('class', 'allstates')
     .attr('x', (node) => node.cx)
    .attr('y', (node) => node.cy + 50);
    
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={6}>
            <NetworkOptions  options={options} sendOptions={changeOptions}/>
            
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <svg  width={width} height={height}></svg>
              <ResultsTable states={states} tableOptions={options} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
