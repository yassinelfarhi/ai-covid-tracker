import React from "react";
import * as d3 from "d3";


import { nodes, links } from "../data/data.js";
import NetworkOptions from "./NetworkOptions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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

export const width = 400;
export const height = 400;

export const centerX = width / 2;
export const centerY = height / 2;

export const simulation = d3
  .forceSimulation(nodes)
  .force('charge', d3.forceManyBody())
  .force('center', d3.forceCenter(0, 0))
  .force('link', d3.forceLink(links))
  .on('tick', ticked);

export function ticked() {
  let circles = d3
    .select('main svg')
    .selectAll('circle')
    .data(nodes);

  let lines = d3
    .select('main svg')
    .selectAll('line')
    .data(links);

  let text = d3.select('main svg').selectAll('text').data(nodes);

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
}

export default function Network() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={6}>
            <NetworkOptions />
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <svg width={width} height={height}></svg>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
