import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));





export default function FloatingActionButtons({onAddClick}) {
  const classes = useStyles();



  return (
    <div>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={onAddClick}>
        <AddIcon />
      </Fab>

      <Fab variant="extended" aria-label="search" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        Search
      </Fab>
      <Fab aria-label="delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}
