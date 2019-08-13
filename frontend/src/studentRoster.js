
import React from 'react';
import Container from '@material-ui/core/Container';
import StudentRosterTable from './studentRosterTable';
import Typography from '@material-ui/core/Typography';



class StudentRoster extends React.Component {
        constructor(props) {
            super(props);
        this.state = {
            rows: [],
        };

//        this.rosterTableHandler = this.rosterTableHandler.bind(this);
    }

    componentDidMount() {
                fetch('/api/student')
                            .then(response => response.json())
                            .then(message => {
                                var newState = {};
                                newState.rows = message
                                this.setState(newState);
                            });
        }


    render() {
        return (
          <div >
      <Typography variant="h5" id="tableTitle" style={{paddingLeft: '150px'}}>
                  Student Roster
      </Typography>
            <Container fixed>
                <StudentRosterTable rows={this.state.rows}/>
            </Container>


          </div>
        );
  }
}

export default StudentRoster;
