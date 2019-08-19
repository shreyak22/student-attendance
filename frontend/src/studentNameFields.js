import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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




export default function TextFields({typed}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    lastname: '',

  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    var firstName = values.name;
    var lastName = values.lastname;

    if (name === "name") {
        firstName = firstName+ event.target.value;
    } else {
        lastName = lastName + event.target.value;
    }
    typed(firstName, lastName);
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
