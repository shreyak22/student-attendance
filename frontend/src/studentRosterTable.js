import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 300
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflow: 'scroll',
    overflowX: 'hidden',
    marginBottom: theme.spacing(2),
    align: 'right',
    height: 300
  },
  table: {
    minWidth: 350,
    height:300
  },
}));

function createData(firstname, lastname) {
  return { firstname, lastname };
}

const rows = [

];

export default function StudentRosterTable({rows}) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>

        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize : 16 }}>First Name</TableCell>
              <TableCell style={{ fontSize : 16 }}>Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" style={{ fontSize : 12 }}>
                  {row.firstname}
                </TableCell>
                <TableCell style={{ fontSize : 12 }}>{row.lastname}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
