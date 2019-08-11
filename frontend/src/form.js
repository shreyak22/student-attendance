import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextFields from './text';
import FloatingActionButtons from './button';

function addClickHandler() {
      console.log('onClick');
}


export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{maxWidth:'500px', marginLeft:'70px', marginRight:'10px'}}>
        <TextFields />
        <FloatingActionButtons onAddClick={() => this.addClickHandler()} />
        </Container>
    </React.Fragment>


  );
}
