export const start = 50;
export  const nodes = [
  { name: 'I', cx: start, cy: start },
  { name: 'U', cx: start + 150, cy: start },
  { name: 'N', cx: start, cy: start + 150 },
  { name: "I'", cx: 175, cy: start + 150 },
  { name: 'K', cx: start + 200, cy: start + 225 },
  { name: 'R', cx: start + 300, cy: start + 150 },
  { name: "K'", cx: start + 300, cy: start + 275 },
];

export const links = [
  { source: 0, target: 1 },
  { source: 1, target: 3 },
  { source: 0, target: 2 },
  { source: 2, target: 3 },
  { source: 3, target: 4 },
  { source: 4, target: 5 },
  { source: 4, target: 6 },
];