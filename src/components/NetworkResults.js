import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(jour, voyage, confinement, travail, barrieres, tests, soins,firstState,secondState,thirdState) {
  return { jour, voyage, confinement, travail, barrieres, tests, soins,firstState,secondState,thirdState};
}



export default function ResultsTable({tableOptions,states}) {
  const classes = useStyles();
  const rows = [
    createData('Jour 1', 
               tableOptions.voyage, 
               tableOptions.confinement, 
               tableOptions.travail, 
               tableOptions.barrieres,
               tableOptions.tests,
               tableOptions.soins,
               states.firstState,
               states.secondState,
               states.thirdState
               )
  ];
  return (
    
    <TableContainer component={Paper}>
      <p>test {states.firstState}</p>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Jours</TableCell>
            <TableCell align="right">A1</TableCell>
            <TableCell align="right">A2</TableCell>
            <TableCell align="right">A3</TableCell>
            <TableCell align="right">A4</TableCell>
            <TableCell align="right">A5</TableCell>
            <TableCell align="right">A6</TableCell>
            <TableCell align="right">S1</TableCell>
            <TableCell align="right">S2</TableCell>
            <TableCell align="right">S3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.jour}>
              <TableCell component="th" scope="row">
                {row.jour}
              </TableCell>
              <TableCell align="right">{row.voyage}</TableCell>
              <TableCell align="right">{row.confinement}</TableCell>
              <TableCell align="right">{row.travail}</TableCell>
              <TableCell align="right">{row.barrieres}</TableCell>
              <TableCell align="right">{row.tests}</TableCell>
              <TableCell align="right">{row.soins}</TableCell>
              <TableCell align="right">{row.firstState}</TableCell>
              <TableCell align="right">{row.secondState}</TableCell>
              <TableCell align="right">{row.thirdState}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}