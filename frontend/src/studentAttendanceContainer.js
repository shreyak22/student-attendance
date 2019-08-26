
import React from 'react';
import Container from '@material-ui/core/Container';
import StudentAttendanceTable from './studentAttendanceTable';
import Typography from '@material-ui/core/Typography';
import { DatePickerInput } from 'rc-datepicker';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'moment';

class StudentAttendanceContainer extends React.Component {
        constructor(props) {
            super(props);
        this.state = {
            rows: [],
            pickDate: ''
        };

        }

    onDateChange = (jsDate, dateString) => {
        this.state.pickDate = Moment(jsDate).format("YYYY-MM-DD")
    }

    onSaveClick = () => {
        for (var i = 0; i < this.state.rows.length; i++) {
            fetch('/api/attend/add', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                studentIdToSet: this.state.rows[i].id,
                typeId: "Present",
                date: this.state.pickDate
              })
            });
        }
        alert("Saved!!!");
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
            <Typography variant="h5" id="tableTitle" style={{paddingLeft: '50px'}}>
                      Take Attendance
            </Typography>
            <DatePickerInput value={this.state.pickDate} onChange={this.onDateChange} />
            <Container fixed>
                <StudentAttendanceTable rows={this.state.rows} id="Table1" ref="Table1"/>
            </Container>

            <Button variant="contained" color="primary" onClick={this.onSaveClick}>
                    Save
            </Button>

          </div>
        );
  }
}

export default StudentAttendanceContainer;
