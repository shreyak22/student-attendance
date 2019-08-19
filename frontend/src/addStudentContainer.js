import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextFields from './studentNameFields';
import FloatingActionButtons from './studentButtonBar';

const name = {
        firstName: "",
        lastName: ""
};


function addClickHandler() {
          console.log(name.firstName + " " + name.lastName);
}

function updateName(first, last) {
    name.firstName = first;
    name.lastName = last;
}


export default function FixedContainer() {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{maxWidth:'500px', marginLeft:'70px', marginRight:'10px'}}>
        <TextFields typed={updateName}/>
        <FloatingActionButtons onAddClick={addClickHandler} />
        </Container>
    </React.Fragment>


  );
}
