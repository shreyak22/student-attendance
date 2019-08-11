import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 500,
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 400,
    fontSize: "3em"
  },
  dense: {
    marginTop: 30,
  },
  menu: {
    width: 100,
  },
  resize:{
    fontSize:50
  },
}));



function addClickHandler() {
   console.log('onClick');
}


export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    lastname: '',

  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };


  return (

    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        variant="outlined"
        id="standard-name"
        label="First Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        InputLabelProps={{style: {fontSize: 15}}}
        inputProps={{style: {fontSize: 15}}}
      />
      <TextField
        variant="outlined"
        id="standard-lastname"
        label="Last Name"
        className={classes.textField}
        value={values.lastname}
        onChange={handleChange('lastname')}
        margin="normal"
        InputLabelProps={{style: {fontSize: 15}}}
        inputProps={{style: {fontSize: 15}}}
      />



    </form>
  );
}
