import React, {Component} from 'react';
import './App.css';

import Example from './calendar';
import ButtonAppBar from './MenuBar';
import EnhancedTable from './StudentTable';
import FixedContainer from './addStudentContainer';
import StudentRoster from './studentRoster';
import Moment from 'moment';
import AttendanceModal from './AttendanceModal';

class App extends Component {
    constructor(props) {
            super(props);
        this.state = {
            rows: [],
        };

        this.childHandler = this.childHandler.bind(this);
    }

    childHandler(dataFromChild) {
            var dateToFetch = Moment(dataFromChild).format("YYYY-MM-DD")
            fetch('/api/fetch?from=' + dateToFetch)
                        .then(response => response.json())
                        .then(message => {
                            var newState = {};
                            newState.rows = message
                            this.setState(newState);
                        });
    }

    render() {
        return (
        <div>
            <ButtonAppBar />
            <AttendanceModal />
            <div id="parentdiv">
                    <div className='rowC'>
                        <Example action={this.childHandler}/>
                        <FixedContainer />
                        <StudentRoster />
                    </div>
                    <EnhancedTable rows={this.state.rows}/>
            </div>
        </div>
        );
    }
}

export default App;