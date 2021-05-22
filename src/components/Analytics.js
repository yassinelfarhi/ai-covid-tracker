import React from "react";
import * as d3 from "d3";
// import {select, selectAll} from "d3-selection";
// import nodes from "../data/data.js";
// import links from "../data/data.js";
const start = 50;
const nodes = [
  { name: "I", cx: start, cy: start },
  { name: "U", cx: start + 150, cy: start },
  { name: "N", cx: start, cy: start + 150 },
  { name: "I'", cx: 175, cy: start + 150 },
  { name: "K", cx: start + 200, cy: start + 225 },
  { name: "R", cx: start + 300, cy: start + 150 },
  { name: "K'", cx: start + 300, cy: start + 275 },
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

// const circles = d3
//     .select('svg')
//     .selectAll('circle')
//     .data(nodes);

// const lines = d3
//     .select('svg')
//     .selectAll('line')
//     .data(links);

const lines = d3
  .select("svg")
  .append("g")
  .attr("stroke", "#999")
  .attr("stroke-opacity", 0.6)
  .selectAll("line")
  .data(links)
  .join("line");

  console.log(lines);

const circles = d3
  .select("svg")
  .append("g")
  .attr("fill", "#fff")
  .attr("stroke", "#000")
  .attr("stroke-width", 1.5)
  .selectAll("circle")
  .data(nodes)
  .join("circle")
  .attr("r", 3.5);

  console.log(circles);

const simulation = d3
  .forceSimulation(nodes)
  .force("charge", d3.forceManyBody())
  .force("center", d3.forceCenter(0, 0))
  .force("link", d3.forceLink(links));

simulation.on("tick", () => {
  lines
    .attr("x1", (d) => d.source.cx)
    .attr("y1", (d) => d.source.cy)
    .attr("x2", (d) => d.target.cx)
    .attr("y2", (d) => d.target.cy);

  circles.attr("cx", (d) => d.cx).attr("cy", (d) => d.cy);
  console.log("positioned");
});

   console.log(simulation);

//  function ticked() {
//   let circles = d3
//     .select('svg')
//     .selectAll('circle')
//     .data(nodes);

//   let lines = d3
//     .select('svg')
//     .selectAll('line')
//     .data(links);

// //   let text = d3.select('svg').selectAll('text').data(nodes);

//   lines
//     .enter()
//     .append('line')
//     .merge(lines)
//     .attr('x1', (line) => line.source.cx)
//     .attr('y1', (line) => line.source.cy)
//     .attr('x2', (line) => line.target.cx)
//     .attr('y2', (line) => line.target.cy);

//   circles
//     .enter()
//     .append('circle')
//     .attr('r', 20)
//     .merge(circles)
//     .attr('cx', (node) => {
//       return node.cx;
//     })
//     .attr('cy', (node) => {
//       return node.cy;
//     });

// //   text
// //     .enter()
// //     .append('text')
// //     .text((node) => node.name)
// //     .merge(text)
// //     .attr('x', (node) => node.cx)
// //     .attr('y', (node) => node.cy);
// }

export const Analytics = () => (
  <div className="analytics">
    <h2>analytics</h2>
    <svg width={width} height={height}></svg>
  </div>
);
