//import 'moment/locale/en.js';
import 'rc-datepicker/lib/style.css';
import React from 'react';

import { DatePicker } from 'rc-datepicker';

//import '../src/style.scss';

class Example extends React.Component {

  state = {
    datePickerDate: '2019-08-13',

    datePickerInputDate2: null,
    showInput: true,
    disabled: false
  }

  toggleInput = () => this.setState({ showInput: !this.state.showInput })

  onClear = () => this.setState({ datePickerDate: null })

  log = (...x) => console.log(...x) // eslint-disable-line no-console

  resetState = () => this.setState({ datePickerInputDate2: undefined })

  render() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
      <div style={{ margin: 20, fontFamily: 'sans-serif' }}>


        <DatePicker
          className='my-react-datepicker'
          locale='fr'
          value={this.state.datePickerDate}
          onChange={(jsDate) => this.setState({ datePickerDate: jsDate })}
        />
        <p />

      </div>
    );
  }
}
export default Example;
//ReactDOM.render(<Example />, document.getElementById('container'));
//        <p>onChange(jsDate)</p>
//        <p>jsDate = {String(this.state.datePickerDate)}</p>