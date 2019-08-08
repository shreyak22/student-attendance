import React, {Component} from 'react';
import './App.css';

import Example from './calendar';
import ButtonAppBar from './MenuBar';
import EnhancedTable from './StudentTable';
import ContainedButtons from './button';



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
                    <ContainedButtons />
                    <Example />
                    <EnhancedTable rows={this.state.rows}/>

            </div>



        </div>
        );
    }
}

export default App;