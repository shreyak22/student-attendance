import React, {Component} from 'react';
import './App.css';

import Example from './calendar';
import ButtonAppBar from './MenuBar';
import EnhancedTable from './StudentTable';



//onChange = (jsDate, dateString) => {
//      // ...
//    }

class App extends Component {

    state = {
        rows: [{firstname: "ABC", lastname: "CDE", present: "P"} ]
    };

    componentDidMount = () => {
        fetch('/api/attend')
            .then(response => response.json())
            .then(message => {
                var newState = {};
                newState.rows = message
                this.setState(newState);
            });
    };

    render() {
        return (
        <div>
            <ButtonAppBar />
            <div id="parentdiv">
                    <Example />
                    <EnhancedTable rows={this.state.rows}/>
            </div>



        </div>
        );
    }
}

export default App;