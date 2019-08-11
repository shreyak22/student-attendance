
import React from 'react';
import Container from '@material-ui/core/Container';
import StudentRosterTable from './studentRosterTable';



class StudentRoster extends React.Component {
        constructor(props) {
            super(props);
        this.state = {
            rows: [],
        };

        this.rosterTableHandler = this.rosterTableHandler.bind(this);
    }

    rosterTableHandler() {
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

            <Container fixed>
                <StudentRosterTable rows={this.state.rows}/>
            </Container>


          </div>
        );
  }
}

export default StudentRoster;
